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


class SnapTradeHoldingsAccountAccountId(
    schemas.DictSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)

    Holdings with account ID
    """


    class MetaOapg:
        
        class properties:
            id = schemas.UUIDSchema
            brokerage_authorization = schemas.UUIDSchema
            portfolio_group = schemas.UUIDSchema
            
            
            class name(
                schemas.StrBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneStrMixin
            ):
            
            
                def __new__(
                    cls,
                    *args: typing.Union[None, str, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'name':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            number = schemas.StrSchema
            institution_name = schemas.StrSchema
        
            @staticmethod
            def meta() -> typing.Type['SnapTradeHoldingsAccountAccountIdMeta']:
                return SnapTradeHoldingsAccountAccountIdMeta
            
            
            class cash_restrictions(
                schemas.ListSchema
            ):
            
            
                class MetaOapg:
                    
                    @staticmethod
                    def items() -> typing.Type['CashRestriction']:
                        return CashRestriction
            
                def __new__(
                    cls,
                    arg: typing.Union[typing.Tuple['CashRestriction'], typing.List['CashRestriction']],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'cash_restrictions':
                    return super().__new__(
                        cls,
                        arg,
                        _configuration=_configuration,
                    )
            
                def __getitem__(self, i: int) -> 'CashRestriction':
                    return super().__getitem__(i)
            created_date = schemas.StrSchema
            __annotations__ = {
                "id": id,
                "brokerage_authorization": brokerage_authorization,
                "portfolio_group": portfolio_group,
                "name": name,
                "number": number,
                "institution_name": institution_name,
                "meta": meta,
                "cash_restrictions": cash_restrictions,
                "created_date": created_date,
            }
        additional_properties = schemas.AnyTypeSchema
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["brokerage_authorization"]) -> MetaOapg.properties.brokerage_authorization: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["portfolio_group"]) -> MetaOapg.properties.portfolio_group: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["name"]) -> MetaOapg.properties.name: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["number"]) -> MetaOapg.properties.number: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["institution_name"]) -> MetaOapg.properties.institution_name: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["meta"]) -> 'SnapTradeHoldingsAccountAccountIdMeta': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["cash_restrictions"]) -> MetaOapg.properties.cash_restrictions: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["created_date"]) -> MetaOapg.properties.created_date: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> MetaOapg.additional_properties: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["id"], typing_extensions.Literal["brokerage_authorization"], typing_extensions.Literal["portfolio_group"], typing_extensions.Literal["name"], typing_extensions.Literal["number"], typing_extensions.Literal["institution_name"], typing_extensions.Literal["meta"], typing_extensions.Literal["cash_restrictions"], typing_extensions.Literal["created_date"], str, ]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["id"]) -> typing.Union[MetaOapg.properties.id, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["brokerage_authorization"]) -> typing.Union[MetaOapg.properties.brokerage_authorization, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["portfolio_group"]) -> typing.Union[MetaOapg.properties.portfolio_group, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["name"]) -> typing.Union[MetaOapg.properties.name, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["number"]) -> typing.Union[MetaOapg.properties.number, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["institution_name"]) -> typing.Union[MetaOapg.properties.institution_name, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["meta"]) -> typing.Union['SnapTradeHoldingsAccountAccountIdMeta', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["cash_restrictions"]) -> typing.Union[MetaOapg.properties.cash_restrictions, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["created_date"]) -> typing.Union[MetaOapg.properties.created_date, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[MetaOapg.additional_properties, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["id"], typing_extensions.Literal["brokerage_authorization"], typing_extensions.Literal["portfolio_group"], typing_extensions.Literal["name"], typing_extensions.Literal["number"], typing_extensions.Literal["institution_name"], typing_extensions.Literal["meta"], typing_extensions.Literal["cash_restrictions"], typing_extensions.Literal["created_date"], str, ]):
        return super().get_item_oapg(name)

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        id: typing.Union[MetaOapg.properties.id, str, uuid.UUID, schemas.Unset] = schemas.unset,
        brokerage_authorization: typing.Union[MetaOapg.properties.brokerage_authorization, str, uuid.UUID, schemas.Unset] = schemas.unset,
        portfolio_group: typing.Union[MetaOapg.properties.portfolio_group, str, uuid.UUID, schemas.Unset] = schemas.unset,
        name: typing.Union[MetaOapg.properties.name, None, str, schemas.Unset] = schemas.unset,
        number: typing.Union[MetaOapg.properties.number, str, schemas.Unset] = schemas.unset,
        institution_name: typing.Union[MetaOapg.properties.institution_name, str, schemas.Unset] = schemas.unset,
        meta: typing.Union['SnapTradeHoldingsAccountAccountIdMeta', schemas.Unset] = schemas.unset,
        cash_restrictions: typing.Union[MetaOapg.properties.cash_restrictions, list, tuple, schemas.Unset] = schemas.unset,
        created_date: typing.Union[MetaOapg.properties.created_date, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[MetaOapg.additional_properties, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader, ],
    ) -> 'SnapTradeHoldingsAccountAccountId':
        return super().__new__(
            cls,
            *args,
            id=id,
            brokerage_authorization=brokerage_authorization,
            portfolio_group=portfolio_group,
            name=name,
            number=number,
            institution_name=institution_name,
            meta=meta,
            cash_restrictions=cash_restrictions,
            created_date=created_date,
            _configuration=_configuration,
            **kwargs,
        )

from snaptrade_client.model.cash_restriction import CashRestriction
from snaptrade_client.model.snap_trade_holdings_account_account_id_meta import SnapTradeHoldingsAccountAccountIdMeta