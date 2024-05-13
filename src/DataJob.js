import ldpLogo from './assets/ldp-logo.png'
import loomisLogo from './assets/LoomisCompanyLogo_Tag_White.svg'
import clarityLogo from './assets/ClarityPartnersLLC.png'
import tptLogo from './assets/tpt_suppliers_logo.jpeg'

const DataJob = [
  {
    id:0,
    company:<a href='https://www.tptsuppliers.com/' title='Go to website'><img className='companyLogo tptlogo' src={tptLogo} alt='tpt logo'/></a>,
    date: "Mar 2024 - Present",
    position: "Collaborator Front-End Developer",
    description: "Write clean and readable code | Translate design to code | Ensure client satisfaction | Take feedback | Tools used Next.js, React.js, Tailwind CSS, Material-UI"
  },
  {
    id:1,
    company: <a href='https://www.libertydentalplan.com/'><img className='companyLogo libLogo' src={ldpLogo} alt='Ldp Logo'/></a>,
    date: "Dec 2022 - Feb 2024",
    position: "Customer and Provider satisfaction",
    description: "Ensure customer satisfaction | Route caller to appropiate departments | Process Grievances | negotiate rates wiht out of network providers | schedule transportation requests | Get interpreters when needed."
  },
  {
    id:2,
    company: <a href='https://www.loomisco.com/'><img className='companyLogo loomisLogo' src={loomisLogo} alt='Loomis Logo'/></a> ,
    date: "July 2021-Dec 2022",
    position: "Bilingual Medical Insurance Customer Sucess",
    description: "Solve al inquires from policy holders | use AS400 to get claim information | Resolve claim issues for providers | interpret medical terms and CPT codes in ways for members to undertand."
  },
  {
    id:3,
    company: <a href='https://www.claritypartners.com/'><img className='companyLogo clarityLogo' src={clarityLogo} alt='Clarity Logo'/></a>,
    role: "Customer Services & Paperwork Processor",
    date: "March 2020 - Jun 2021",
    description: "Process Application for low income individuals | Explain Utility bills | Resolve complex issues with utility bills | Offer payment options | Send Paperwork that required extensive escalation | "
  }
]

export default DataJob;