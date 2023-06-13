
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { Desktop } from './Desktop'
import { Mobile } from '../src/Mobile/Mobile'


function App() {
  
  return (
   <>
     <BrowserView>
        <Desktop/>
     </BrowserView>
      <MobileView>
         <Mobile/>
      </MobileView>
   </>
  );
}

export default App;
