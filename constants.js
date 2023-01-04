export const HOLIDAY_DAYS = [3, 4, 5, 6, 7, 10];
export const SKEPPSBRON_HASH = 'f6597937c607495f0e080ee0d25aff33'

export const INIT_PARAMS = {
    hash: SKEPPSBRON_HASH
}

export const URL_QUERY_PARAMS = `?${new URLSearchParams(INIT_PARAMS).toString()}`;