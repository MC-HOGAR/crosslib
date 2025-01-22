export enum Enviroment {
    development = "development",
    preview = "preview",
    production = "production"
}

interface EnviromentVariablesBase {
    CURRENT_ENV: Enviroment;
}

interface EnviromentVariablesAWS {
    AWS_ACCOUNT_ID: string;
    AWS_REGION: string;
    AWS_USER_POOL_NAME: string;
    AWS_USER_POOL_ID: string;
}

interface EnviromentVariablesDB {
    DATABASE_URL: string;
    DIRECT_URL: string;
}

export interface EnviromentVariablesBackend extends EnviromentVariablesBase, EnviromentVariablesAWS, EnviromentVariablesDB {}

export interface EnviromentVariablesFrontendSPA extends EnviromentVariablesBase, EnviromentVariablesAWS {}

export interface EnviromentVariablesFrontendStorefront extends EnviromentVariablesBase {}