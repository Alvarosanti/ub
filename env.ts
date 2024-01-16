import { cleanEnv,port,str } from "envalid";

const env = cleanEnv(process.env,{
    VERCEL_SERVICE_ID:str({default:'service_4vlsw5e'}),
    VERCEL_TEMPLATE_ID: str({default:'template_qzb9lgh'}),
    VERCEL_PUBLIC_KEY:str({default:'eW9YxPtvIBR1yTBjN'})
})
//
export default env;