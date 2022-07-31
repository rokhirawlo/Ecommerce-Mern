import axios from "axios";


  const BASE_URL = "http://localhost:5000/api/";
  const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWFjNDMyY2JmOTA0N2NkZTU1YWEyMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzM5NTg1MiwiZXhwIjoxNjU3NjU1MDUyfQ.RxOn-lrnuPsONxcA_YXy0i3aJtpQhC5ZnXJ80WAAaLs";


  export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });