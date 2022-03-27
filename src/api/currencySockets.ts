const auth = {
  action: 'auth',
  key: 'PKY5716VQC1WM3VC8UGC',
  secret: 'JwseKVdoFZhj631zGxNblDjDxwD4HMELVmywloAl',
};

const subscribe = {
  action: 'subscribe',
  trades: ['BTCUSD'],
  quotes: ['USDCUSD', 'ETHUSD'],
  bars: ['BCHUSD'],
};

const getCurrencyRealTimeData = (url: string) => {
  const socket = new WebSocket(url);

  socket.onmessage = (event: MessageEvent<any>) => {
    const data = JSON.parse(event.data);

    console.log(data);

    if (data[0]['msg'] === 'connected') {
      console.log('do authentication');
      socket.send(JSON.stringify(auth));
    }

    if (data[0]['msg'] === 'authenticated') {
      socket.send(JSON.stringify(subscribe));
    }
  };
};

export default getCurrencyRealTimeData;
