import { cleanEnv,port,str } from "envalid";

const env = cleanEnv(process.env,{
    VERCEL_SERVICE_ID:str({default:'service_qxf08ce'}),
    VERCEL_TEMPLATE_ID: str({default:'template_fps1zad'}),
    VERCEL_PUBLIC_KEY:str({default:'n8Z944SXc3h_TqBEX'})
})
//
export default env;