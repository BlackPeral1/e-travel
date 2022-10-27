import { error } from "winston";
import asyncHandler from "../middleware/async";
import Company from "../models/company.model";
import {
    createCompany,
    retrieveAllCompany,
    getCompanyDetails,
    retrieveAllCompanywithSub
} from "../services/company";
import { makeResponse } from "../utils/response";

//Adding a Payment Method
const addCompany = asyncHandler(async (req, res) => {
    const result = await createCompany(req.body);
    if (!result)
        return makeResponse({
            res,
            status: 500,
            message: "Failed to add Company",
        });
    if (result.status) return makeResponse({ res, ...result });
    return makeResponse({ res, message: "Company added successfully" });

//Get All Payments
export const getAllCompany = asyncHandler(async (req, res) => {
    const data = await retrieveAllCompany(req.query.page, req.query.limit);
    return makeResponse({
        res,
        data,
        message: "Companies retrieved successfully",
    });
});

//Relavant Payment
export const getCompanyById = asyncHandler(async (req, res) => {
    const result = await getCompanyDetails(req.params.id);

    if (result.status != 200) return makeResponse({ res, ...result });
    return makeResponse({ res, data: result.data, message: result.message });
});

//Update Payment Method
const updateCompany = async (req, res) => {
    const CompanyId = req.params.id;

    try {
        const company = await Company.findById(CompanyId);

        if (!company) {
            return res.status(404).json("There is no company");
        }

        const {
            name,
            email,
            address,
            telephone,
            customers,
            centers,
            logo,
            openhour,
            closehour,
            opendays,
            slogan,
            about,
        } = req.body;

        const com = await Company.findByIdAndUpdate(CompanyId, {
            name,
            email,
            address,
            telephone,
            customers,
            centers,
            logo,
            openhour,
            closehour,
            opendays,
            slogan,
            about,
        });

        res.status(200).json(com);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

//Delete a Payment Method
const deleteCompany = async (req, res) => {
    const id = req.params.id;
    let company;
    try {
        company = await Company.findByIdAndRemove(id);
    } catch (error) {
        console.log(error.message);
    }
    if (!company) {
        return res.status(404).json({ message: "Company not found" });
    }
    return res.status(200).json({ company });
};

//Get All Customers with SUbscribed Companies
export const getAllCompanySub = asyncHandler(async (req, res) => {
    const data = await retrieveAllCompanywithSub(req.query.page, req.query.limit);
    return makeResponse({
        res,
        data,
        message: "Companies retrieved successfully",
    });
});



module.exports = {
    addCompany,
    getAllCompany,
    getCompanyById,
    updateCompany,
    deleteCompany,
    getAllCompanySub
};

// name
// email
// address
// telephone
// customers
// centers
// logo
// openhour
// closehour
// opendays
// slogan
// about
