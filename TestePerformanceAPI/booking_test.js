import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 20,            
  duration: '30s',    
};

export default function () {
  const url = 'https://restful-booker.herokuapp.com/booking';
  const payload = JSON.stringify({
    firstname: "Vanessa",
    lastname: "Teste",
    totalprice: 123,
    depositpaid: true,
    bookingdates: {
      checkin: "2026-05-16",
      checkout: "2026-05-20"
    },
    additionalneeds: "duas camas"
  });

  const params = {
    headers: { 'Content-Type': 'application/json' },
  };

  let res = http.post(url, payload, params);

  // Parse JSON da resposta
  let jsonRes;
  try {
    jsonRes = res.json();
  } catch (e) {
    console.log("Resposta não é JSON:", res.body);
  }

  check(res, {
    'status é 200': (r) => r.status === 200,
    'resposta contém bookingid': (r) => jsonRes && jsonRes.bookingid !== undefined,
  });

  sleep(1); 
}