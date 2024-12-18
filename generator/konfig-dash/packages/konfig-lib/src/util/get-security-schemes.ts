import { OpenAPIV2, OpenAPIV3, OpenAPIV3_1 } from 'openapi-types'
import { Spec } from '../parseSpec'
import { resolveRef } from '../resolveRef'

export type SecurityScheme =
  | OpenAPIV2.SecuritySchemeObject
  | OpenAPIV3.SecuritySchemeObject
  | OpenAPIV3_1.SecuritySchemeObject
export type SecuritySchemes = Record<string, SecurityScheme>
export const getSecuritySchemes = async ({
  spec,
  $ref,
}: {
  spec: Spec['spec']
  $ref: Spec['$ref']
}): Promise<SecuritySchemes | undefined> => {
  if ('securityDefinitions' in spec) {
    throw Error('OAS 2.0 (Swagger) not supported')
  }
  if ('components' in spec) {
    const securitySchemes = spec.components?.securitySchemes
    if (securitySchemes === undefined) return
    const resolved = await Promise.all(
      Object.entries(securitySchemes).map(
        async ([name, refOrObject]): Promise<
          [string, OpenAPIV3.SecuritySchemeObject]
        > => {
          return [name, resolveRef({ refOrObject, $ref })]
        }
      )
    )
    return Object.fromEntries(resolved)
  }
  return
}
