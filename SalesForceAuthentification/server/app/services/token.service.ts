import Axios from "axios";
import { injectable } from "inversify";
import "reflect-metadata";
import { Constants} from "../constantes";

@injectable()
export class TokenService {

    public async getTokens(code: string) {
        const url: string = Constants.url + "&grant_type=" + Constants.grantType + "&code=" + code +
        "&client_id=" + Constants.clientId + "&client_secret=" + Constants.clientSecret + "&redirect_uri=" + Constants.redirectedUri;

        return Axios.post<JSON>(url, null).then((response) => {
            return response;
        }).catch((error) => {
            console.error(`There was an error!!!`, error);
        });
    }
}
