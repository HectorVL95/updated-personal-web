import ldpLogo from './assets/ldp-logo.png'
import loomisLogo from './assets/LoomisCompanyLogo_Tag_White.svg'
import clarityLogo from './assets/ClarityPartnersLLC.png'
import uasLogo from './assets/uasLogo.png'

export default [
  {
    id:0,
    company: <img className='companyLogo libLogo' src={ldpLogo}/>,
    date: "Dec 2022 - Present",
    position: "Customer and Provider satisfaction",
    description: "Ensure custoner satisfaction | Route caller to appropiate departments | Process Grievances | negotiate rates wiht out of network providers | schedule transportation requests | Get interpreters when needed."
  },
  {
    id:1,
    company: <img className='companyLogo' src={loomisLogo}/>,
    date: "July 2021-Dec 2022",
    position: "Bilingual Medical Insurance Customer Sucess",
    description: "Solve al inquires from policy holders | use AS400 to get claim information | Resolve claim issues for providers | interpret medical terms and CPT codes in ways for members to undertand."
  },
  {
    id:2,
    company: <img className='companyLogo' src={clarityLogo}/>,
    role: "Customer Services & Paperwork Processor",
    date: "March 2020 - Jun 2021",
    description: "Process Application for low income individuals | Explain Utility bills | Resolve complex issues with utility bills | Offer payment options | Send Paperwork that required extensive escalation | "
  },
  {
    id:3,
    institution: <img className='companyLogo' src={uasLogo}/>
  }
]