import {Fragment, useState} from "react";
import styles from './products.module.css';
import PageHeader from "../ui/page-header";
import Content from "./content";
import { ChooseCategory, SubmitProclamation } from "./PLayouts";

const Proclamation = () => {
    const [steps, setSteps] = useState(0);
    const layouts = [
        <ChooseCategory nextStep={() => setSteps(steps + 1)}/>,
        <SubmitProclamation lastStep={() => setSteps(steps - 1)}/>,
        <SubmitProclamation />
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