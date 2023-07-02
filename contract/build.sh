#!/bin/sh

echo ">> Building contract"

near-sdk-js build src/patentContract.ts build/patent_contract.wasm
