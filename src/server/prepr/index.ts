import type { DocumentNode } from 'graphql';
import { analyzeDocument } from 'graphql-request';
import type { FetchOptions } from 'ofetch';

import { gqlClient } from './client';
import { getSdk } from './generated/getSdk';
import type { PreprGetHomePageQuery } from './generated/preprAPI.schema';

// Build the Prepr SDK using the gqlClient + GraphQL analyzer
export const PreprSdk = getSdk(
  async <TData>(
    document: DocumentNode,
    variables?: unknown,
    options?: FetchOptions<'json'>,
  ): Promise<TData> => {
    const { expression, operationName } = analyzeDocument(document);

    const { data } = await gqlClient<{ data: TData }>('', {
      ...options,
      body: {
        query: expression,
        variables,
        operationName,
      },
    });

    return data;
  },
);

// Export functions to fetch data
export async function fetchHomePage(): Promise<PreprGetHomePageQuery['Page'] | undefined> {
  try {
    const result = await PreprSdk.GetHomePage();
    return result.Page;
  } catch (error) {
    console.error('Error fetching home page:', error);
    return undefined;
  }
}
