import {Fragment, useState} from "react";
import styles from './products.module.css';
import PageHeader from "../ui/page-header";
import Content from "./content";
import { ChooseCategory, ProclamationSuccess, SubmitProclamation } from "./PLayouts";

const Proclamation = () => {
    const [steps, setSteps] = useState(0);
    const layouts = [
        <ChooseCategory nextStep={() => setSteps(steps + 1)} key='CHOOSE_CATEGORY_LAYOUT'/>,
        <SubmitProclamation lastStep={() => setSteps(steps - 1)} key="PROCLAMATION_FORM_LAYOUT"/>,
        <ProclamationSuccess key='SUCCESS_PROCLAMATION_LAYOUT'/>
    ]
    return (
        <Fragment>
            <PageHeader title="ثبت آگهی" pageTitle="خدمات" pageLink="/" image="product.jpg" />
            <div className="w-full flex justify-center py-32">
                {layouts[steps]}
                </div>
        </Fragment>
    )
};

export default Proclamation;