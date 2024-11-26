import axios from "axios";
import { cookies, headers } from "next/headers";

export async function fetchLanguage (searchLang : string) {
    const cookie = cookies();
    const cookieLang = cookie.get('LANG') || { value: 'kr' }; // 기본값을 객체 형태로 설정
    const langValue = searchLang || cookieLang?.value || 'kr';
    const host = headers().get('host');
    const protocol = 'http://'
    try {
        const response = await axios.get(`${protocol}${host}/api/lang?lang=${langValue}`);
        return response?.data;
    } catch (error) {
        console.error("Failed to fetch language data:", error);
        return null;  // 혹은 기본 값을 반환하거나, 오류 처리를 여기서 할 수 있습니다.
    }
}
