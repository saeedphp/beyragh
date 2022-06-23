import {Fragment, useEffect, useState} from "react";
import styles from './products.module.css';
import PageHeader from "../ui/page-header";
import Content from "./content";
import { ChooseCategory, ProclamationSuccess, SubmitProclamation } from "./PLayouts";
import adsActions from "../../redux/actions/ads";
import { connect } from "react-redux";

const Proclamation = ({fetchCats,proclamationSucceeded}) => {
       
    const [steps, setSteps] = useState(0);
    useEffect(() => {
        window.scrollTo(0,0)
    }, [steps])
    const layouts = [
        <ChooseCategory nextStep={() => setSteps(steps + 1)} key='CHOOSE_CATEGORY_LAYOUT'/>,
        <SubmitProclamation lastStep={() => setSteps(steps - 1)} key="PROCLAMATION_FORM_LAYOUT"/>,
        <ProclamationSuccess key='SUCCESS_PROCLAMATION_LAYOUT'/>
    ]


    useEffect(() => {
        if(proclamationSucceeded){
            setSteps(2)
        }
    }, [proclamationSucceeded])
    return (
        <Fragment>
            <PageHeader title="ثبت آگهی" pageTitle="خدمات" pageLink="/" image="product.jpg" />
            <div className="w-full flex justify-center py-32">
                {layouts[steps]}
                </div>
        </Fragment>
    )
};
const mapStateToProps = state => ({
    categories: state.adsReducer.categories,
    proclamationSucceeded: state.adsReducer.status.proclamationSucceeded,
});
const mapDispatchToProps = {
    fetchCats: adsActions.list,
}

export default connect(mapStateToProps, mapDispatchToProps)(Proclamation);