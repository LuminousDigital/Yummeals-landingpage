
import Navbar from '@/components/Navbar'
// import HeroSection from '@/components/HeroSection'
// import WhyYummeals from '@/components/WhyYummeals'
// import FoodPersonality from '@/components/FoodPersonality'
// import Ticket from "@/components/ticket";
import Footer from "@/components/footer";
// import ComingSoonPage from '@/components/comingsoon';
// import Delivery from '@/components/delivery';
import Whyyumeal from '@/components/whyyummeal';
import PromoSection from '@/components/PromoSection';
import Free from '@/components/Free';
import Launching from '@/components/Launching';
import Prizes from '@/components/Prizes';
import ReferralCampaign from '@/components/ReferralCampaign';
import LiveLeaderboard from '@/components/LiveLeaderboard';
import Terms from '@/components/Terms';

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <HeroSection /> */}

      <PromoSection/>
      <Free/>
      <Launching/>
      <Prizes/>
      <ReferralCampaign/>
      
      {/* <Delivery />  */}
      {/* <WhyYummeals /> */}
      <Whyyumeal /> 
      <LiveLeaderboard/>
      <Terms/>
      {/* <FoodPersonality /> */}
      {/* <Ticket /> */}
       
      {/* <ComingSoonPage/> */}
      <Footer />
    </main>
  );
}
