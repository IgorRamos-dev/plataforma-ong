
(function(){
  function drawPie(canvasId, data){
    const c = document.getElementById(canvasId);
    if(!c) return;
    const ctx = c.getContext('2d');
    const w = c.width = 640, h = c.height = 400;
    const cx = w/2, cy = h/2, r = Math.min(w,h)/2 - 20;
    const total = data.values.reduce((a,b)=>a+b,0);
    let ang = -Math.PI/2;
    data.values.forEach((v,i)=>{
      const frac = v/total;
      const a2 = ang + frac*2*Math.PI;
      ctx.beginPath();
      ctx.moveTo(cx,cy);
      ctx.arc(cx,cy,r,ang,a2);
      ctx.closePath();
      ctx.fillStyle = ['#0ea5e9','#22c55e','#eab308','#ef4444','#a78bfa'][i % 5];
      ctx.fill();
      ang = a2;
    });
    ctx.font = '14px sans-serif';
    ctx.fillStyle = '#0b1222';
    data.labels.forEach((lab,i)=>{
      ctx.fillRect(20, 20 + i*22, 14, 14);
      ctx.fillStyle = ['#0ea5e9','#22c55e','#eab308','#ef4444','#a78bfa'][i % 5];
      ctx.fillRect(20, 20 + i*22, 14, 14);
      ctx.fillStyle = '#0b1222';
      ctx.fillText(lab + ' — ' + data.values[i], 40, 32 + i*22);
    });
  }

  function drawLine(canvasId, data){
    const c = document.getElementById(canvasId);
    if(!c) return;
    const ctx = c.getContext('2d');
    const w = c.width = 720, h = c.height = 420;
    const pad = 48;
    const maxY = Math.max(...data.values) * 1.1;
    const minY = 0;
    ctx.strokeStyle = '#94a3b8';
    ctx.beginPath();
    ctx.moveTo(pad, h-pad);
    ctx.lineTo(w-pad, h-pad);
    ctx.moveTo(pad, h-pad);
    ctx.lineTo(pad, pad);
    ctx.stroke();
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    for(let i=1;i<=4;i++){
      const y = pad + (h-2*pad)*i/4;
      ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(w-pad, y); ctx.stroke();
    }
    ctx.strokeStyle = '#0f766e';
    ctx.lineWidth = 3;
    ctx.beginPath();
    data.values.forEach((v,i)=>{
      const x = pad + (w-2*pad)*i/(data.values.length-1);
      const y = h - pad - (v-minY)/(maxY-minY)*(h-2*pad);
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    });
    ctx.stroke();
    ctx.fillStyle = '#0f766e';
    ctx.font = '12px sans-serif';
    data.values.forEach((v,i)=>{
      const x = pad + (w-2*pad)*i/(data.values.length-1);
      const y = h - pad - (v-minY)/(maxY-minY)*(h-2*pad);
      ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fill();
      ctx.fillText(data.labels[i], x-10, h-pad+18);
    });
  }

  function drawBar(canvasId, data){
    const c = document.getElementById(canvasId);
    if(!c) return;
    const ctx = c.getContext('2d');
    const w = c.width = 720, h = c.height = 420;
    const pad = 48;
    const maxY = Math.max(...data.values) * 1.15;
    ctx.strokeStyle = '#94a3b8';
    ctx.beginPath();
    ctx.moveTo(pad, h-pad);
    ctx.lineTo(w-pad, h-pad);
    ctx.moveTo(pad, h-pad);
    ctx.lineTo(pad, pad);
    ctx.stroke();
    const bw = (w-2*pad)/data.values.length * 0.6;
    data.values.forEach((v,i)=>{
      const x = pad + (w-2*pad)*i/data.values.length + ( (w-2*pad)/data.values.length - bw)/2;
      const y = h - pad - v/maxY*(h-2*pad);
      const bh = h - pad - y;
      ctx.fillStyle = '#14b8a6';
      ctx.fillRect(x,y,bw,bh);
      ctx.fillStyle = '#0b1222';
      ctx.font = '12px sans-serif';
      ctx.fillText(data.labels[i], x, h-pad+18);
    });
  }

  window.ONGCharts = { drawPie, drawLine, drawBar };
})();
