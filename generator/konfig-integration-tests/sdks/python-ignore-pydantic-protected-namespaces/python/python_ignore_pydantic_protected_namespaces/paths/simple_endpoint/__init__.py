# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from python_ignore_pydantic_protected_namespaces.paths.simple_endpoint import Api

from python_ignore_pydantic_protected_namespaces.paths import PathValues

path = PathValues.SIMPLEENDPOINT