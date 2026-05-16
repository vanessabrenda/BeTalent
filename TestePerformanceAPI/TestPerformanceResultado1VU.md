PS C:\Users\vanes\Documents\playwright-betalent-test\TestePerformanceAPI>
>> k6 run booking_test.js

         /\      Grafana   /‾‾/
    /\  /  \     |\  __   /  /
   /  \/    \    | |/ /  /   ‾‾\
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/


     execution: local
        script: booking_test.js
        output: -

     scenarios: (100.00%) 1 scenario, 1 max VUs, 40s max duration (incl. graceful stop):
              * default: 1 looping VUs for 10s (gracefulStop: 30s)

INFO[0000] Resposta não é JSON: I'm a Teapot             source=console
INFO[0001] Resposta não é JSON: I'm a Teapot             source=console
INFO[0002] Resposta não é JSON: I'm a Teapot             source=console
INFO[0004] Resposta não é JSON: I'm a Teapot             source=console
INFO[0005] Resposta não é JSON: I'm a Teapot             source=console
INFO[0006] Resposta não é JSON: I'm a Teapot             source=console
INFO[0007] Resposta não é JSON: I'm a Teapot             source=console
INFO[0008] Resposta não é JSON: I'm a Teapot             source=console
INFO[0009] Resposta não é JSON: I'm a Teapot             source=console


  █ TOTAL RESULTS

    checks_total.......: 18      1.649459/s
    checks_succeeded...: 0.00%   0 out of 18
    checks_failed......: 100.00% 18 out of 18

    ✗ status é 200
      ↳  0% — ✓ 0 / ✗ 9
    ✗ resposta contém bookingid
      ↳  0% — ✓ 0 / ✗ 9

    HTTP
    http_req_duration....: avg=152.85ms min=144.31ms med=153.8ms max=155.38ms p(90)=155.26ms p(95)=155.32ms
    http_req_failed......: 100.00% 9 out of 9
    http_reqs............: 9       0.82473/s

    EXECUTION
    iteration_duration...: avg=1.21s    min=1.15s    med=1.15s   max=1.67s    p(90)=1.25s    p(95)=1.46s
    iterations...........: 9       0.82473/s
    vus..................: 1       min=1      max=1
    vus_max..............: 1       min=1      max=1

    NETWORK
    data_received........: 11 kB   1.0 kB/s
    data_sent............: 4.8 kB  438 B/s




running (10.9s), 0/1 VUs, 9 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  10s