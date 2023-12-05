
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import StudentsForm from "./LoginForms/StudentsForm";
import TeacherFrom from "./LoginForms/TeacherForm";
import "./style.css"
const Login = () => {

  
    return (
        <div className="relative mx-auto w-full max-w-md bg-white px-6 lg:mt-32 mt-4 md:mt-16 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <Tabs className="max-w-6xl">
    <TabList className="max-w-3xl flex justify-center custom-tab-list items-center gap-10 ">
      <Tab className="custom-tab">Student Login</Tab>
      <Tab className="custom-tab">Teacher Login</Tab>
    </TabList>

    <TabPanel>
        <div className="pt-10">
            <StudentsForm></StudentsForm>
        </div>
      
    </TabPanel>
    <TabPanel>
      <div className="pt-10">
         <TeacherFrom></TeacherFrom>
      </div>
    </TabPanel>
  </Tabs>
          
        </div>
    );
};

export default Login;