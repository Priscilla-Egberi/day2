import Card from "./components/Card"
import { bulb, search, upload } from './assets'
import './App.css'

function App() {


  return (
    <>
     <div className='h-screen bg-[#fafafa]'>
      <div className="pt-10 px-3 text-center">
        <h1 className="text-2xl font-semi-bold text-gray-500 mb-2">Realiable, efficient delivery</h1>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Powered by Technology</h1>
        <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, vouptas.</p>
        <div className="mt-6 md:mt-12 flex justify-center items-center">
        <div className="grid md:grid-cols-3 gap-4">
          {/* first column */}
        <div className="flex justify-center items-center">
        <Card title="Supervisor" body="The supervisor's role is to monitor the work carried out and making sure the work is done properly" object={search} color="border-blue-700"/>
        </div>
        {/* second column */}
        <div className="flex flex-col gap-4">        
      <Card title="Team Builder" body="Plays a small but mighty role, this set of people stick around and help with their skills, the team can't do without them" object={upload} color="border-red-700" />
      <Card title="Karma" body="Well, as funny as the name sounds, this sets of people cool" object={bulb} color="border-yellow-700" />
        </div>
        {/* third column */}
        <div className="flex justify-center items-center">
      <Card title="Calculator" body="This technology has so much affected the work done in today's affairs and this team will so much do same" object={upload} color="border-blue-600" />
      </div>
        </div>
        </div>
      </div>
      
     </div>
    </>
  )
}

export default App
