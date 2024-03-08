
import {AccountBox,Warning,MailOutline} from '@mui/icons-material';
const Comment = () => {
  return (
    <>
    <div>
            <div style={{display:'flex',justifyContent:'space-around',gap:'62rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',gap:'1rem'}}>
                <div>1 comment</div>
                <div>tour</div>
                <div>privacy policy</div>
                </div>
                <div>1 Vishal</div>
            </div>
            <div style={{padding:'10px 0',}}>
                <hr/>
            </div>
             <div style={{display:'flex',justifyContent:'space-around',gap:'62rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',gap:'1rem'}}>
                <div>favorite 1</div>
                <div>telagram</div>
                <div>face</div>
                </div>
                <div>Sort by Best</div>
            </div>
            <form style={{display:'flex',gap:'0.5rem',padding:'20px 0',}} >
                <AccountBox  style={{width:'50px',height:'40px',color: "#aaa"}}/>
                <input placeholder='Join the discussion ...' style={{width:'100%',height:'40px'}}/>
            </form>
            <div style={{display:'flex',gap:'0.5rem',padding:'20px 0',}} >
                <AccountBox  style={{width:'50px',height:'40px',color: "#aaa"}}/>
                <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',gap:'1rem'}}>
                <div style={{color:'#345690',fontWeight:'bolder',}}>vishal</div>
                <div>2 months ago</div>
                </div>
                <div>This is nice Tour</div>
                <div style={{display:'flex',gap:'1rem'}}>
                <div>|</div>
                <div>reply</div>
                <div>{"share>"}</div>
                </div>
            </div>
            </div>
            <div style={{padding:'10px 0',}}>
                <hr/>
            </div>
            <div style={{display:'flex',gap:'45rem'}}>
                <div style={{display:'flex',gap:'1rem'}}>
            <div style={{display:'flex',gap:'0.5rem',}} >
                <MailOutline/>
                <div>Subscribe</div>
            </div>
            <div style={{display:'flex',gap:'0.5rem',}} >
                 <MailOutline/>
                <div style={{width:'150px'}}>Add Disqus to your site</div>
            </div>
            <div style={{display:'flex',gap:'0.5rem',}} >
                <Warning/>
                <div style={{width:'150px'}}>Do not Sell My data</div>
            </div>
                </div>
                <div style={{fontSize:'18px'}}>DISQUS</div>
            </div>
        </div>
    </>
  )
}

export default Comment