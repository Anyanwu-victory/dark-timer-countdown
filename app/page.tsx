// pages/index.js
import Timer from '@/app/components/Timer';

export default function Home() {
  return (
    <div>
      <Timer initialTime={7200} /> {/* 7200 seconds = 2 hours */}
    </div>
  );
}
