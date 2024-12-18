# coding: utf-8
"""
    Carbon

    Connect external data to LLMs, no matter the source.

    The version of the OpenAPI document: 1.0.0
    Generated by: https://konfigthis.com
"""

from carbon.paths.embeddings.post import GetDocuments
from carbon.paths.text_chunks.post import GetEmbeddingsAndChunks
from carbon.paths.upload_chunks_and_embeddings.post import UploadChunksAndEmbeddings
from carbon.apis.tags.embeddings_api_raw import EmbeddingsApiRaw


class EmbeddingsApiGenerated(
    GetDocuments,
    GetEmbeddingsAndChunks,
    UploadChunksAndEmbeddings,
):
    """NOTE:
    This class is auto generated by Konfig (https://konfigthis.com)
    """
    raw: EmbeddingsApiRaw

    def __init__(self, api_client=None):
        super().__init__(api_client)
        self.raw = EmbeddingsApiRaw(api_client)
