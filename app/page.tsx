// pages/index.js
import Timer from '@/app/components/Timer';
import Clock from '@/app/components/Clock';

export default function Home() {
  return (
    <div>
      {/* <Timer initialTime={7200} /> 7200 seconds = 2 hours */}
      <Clock/>
    </div>
  );
}
