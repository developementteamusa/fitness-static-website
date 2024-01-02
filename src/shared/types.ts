// Let's set 'required' and 'optional' parameters for the created React TypeScrit Components :
export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
}
  
export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}
  
export interface ClassType {
    name: string;
    // The description in this case is 'optional'. Meaning you can or cannot have a description in some cases.
    description?: string;
    image: string;
}