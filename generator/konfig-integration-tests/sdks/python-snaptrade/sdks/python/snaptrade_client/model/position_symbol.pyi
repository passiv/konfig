# coding: utf-8

"""
    SnapTrade

    Connect brokerage accounts to your app for live positions and trading

    The version of the OpenAPI document: 1.0.0
    Contact: api@snaptrade.com
    Created by: https://snaptrade.com/
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from snaptrade_client import schemas  # noqa: F401


class PositionSymbol(
    schemas.DictSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)

    Symbol returned in position object
    """


    class MetaOapg:
        
        class properties:
            id = schemas.UUIDSchema
            description = schemas.StrSchema
        
            @staticmethod
            def symbol() -> typing.Type['UniversalSymbol']:
                return UniversalSymbol
            
            
            class local_id(
                schemas.StrBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneStrMixin
            ):
            
            
                def __new__(
                    cls,
                    *args: typing.Union[None, str, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'local_id':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            is_quotable = schemas.BoolSchema
            is_tradable = schemas.BoolSchema
            __annotations__ = {
                "id": id,
                "description": description,
                "symbol": symbol,
                "local_id": local_id,
                "is_quotable": is_quotable,
                "is_tradable": is_tradable,
            }
        additional_properties = schemas.AnyTypeSchema
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["description"]) -> MetaOapg.properties.description: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["symbol"]) -> 'UniversalSymbol': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["local_id"]) -> MetaOapg.properties.local_id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["is_quotable"]) -> MetaOapg.properties.is_quotable: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["is_tradable"]) -> MetaOapg.properties.is_tradable: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> MetaOapg.additional_properties: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["id"], typing_extensions.Literal["description"], typing_extensions.Literal["symbol"], typing_extensions.Literal["local_id"], typing_extensions.Literal["is_quotable"], typing_extensions.Literal["is_tradable"], str, ]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["id"]) -> typing.Union[MetaOapg.properties.id, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["description"]) -> typing.Union[MetaOapg.properties.description, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["symbol"]) -> typing.Union['UniversalSymbol', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["local_id"]) -> typing.Union[MetaOapg.properties.local_id, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["is_quotable"]) -> typing.Union[MetaOapg.properties.is_quotable, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["is_tradable"]) -> typing.Union[MetaOapg.properties.is_tradable, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[MetaOapg.additional_properties, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["id"], typing_extensions.Literal["description"], typing_extensions.Literal["symbol"], typing_extensions.Literal["local_id"], typing_extensions.Literal["is_quotable"], typing_extensions.Literal["is_tradable"], str, ]):
        return super().get_item_oapg(name)

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        id: typing.Union[MetaOapg.properties.id, str, uuid.UUID, schemas.Unset] = schemas.unset,
        description: typing.Union[MetaOapg.properties.description, str, schemas.Unset] = schemas.unset,
        symbol: typing.Union['UniversalSymbol', schemas.Unset] = schemas.unset,
        local_id: typing.Union[MetaOapg.properties.local_id, None, str, schemas.Unset] = schemas.unset,
        is_quotable: typing.Union[MetaOapg.properties.is_quotable, bool, schemas.Unset] = schemas.unset,
        is_tradable: typing.Union[MetaOapg.properties.is_tradable, bool, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[MetaOapg.additional_properties, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader, ],
    ) -> 'PositionSymbol':
        return super().__new__(
            cls,
            *args,
            id=id,
            description=description,
            symbol=symbol,
            local_id=local_id,
            is_quotable=is_quotable,
            is_tradable=is_tradable,
            _configuration=_configuration,
            **kwargs,
        )

from snaptrade_client.model.universal_symbol import UniversalSymbol