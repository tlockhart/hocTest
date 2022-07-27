import React from "react";
// import {useState} from "react";

import "../App.css";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SelectProject from '../controllers/SelectProject';
import schema from "../schemas/user";


function Form() {
    const preloadedValues = {
        // firstName: "User",
        // lastName: "Userson",
        selectedFlavors: ["Chocolate", "Strawberry", "Vanilla"],
        selectedColors: ["White", "Yellow", "Red"],
        proto: {
            value: 'yellow',
            label: 'Yellow'
        },
        tags: [
            {_id: '0', value: 'chocolate', label: 'Chocolate'},
            {_id: '1', value: 'strawberry', label: 'Strawberry'},
            {_id: '2', value: 'vanilla', label: 'Vanilla'},
        ]
    }

    // Destructure the useForm Hook
    const {
        register,
        control,
        handleSubmit,
        formState: {errors},
        setValue,
    } = useForm({
        defaultValues: preloadedValues,
        resolver: yupResolver(schema),
    });

//Create submitFormHandler
    const submitForm = (data) => {
        //All inputs are passed back as the data argument
        console.log("SelectedStuff:", data);
    };

    return (
        <div className="Form">
            <div className="title">Sign Up</div>
            <div className="inputs">
                pass into handleSubmit function submitForm function
                <form onSubmit={handleSubmit(submitForm)}>
                    <div>
                        <SelectProject
                            name="proto"
                            type="proto"
                            control={control}
                            preloadedValues={preloadedValues}
                        />
                        <p style={{color: 'red'}}>{errors.proto?.message || errors.proto?.label.message}</p>
                        <SelectProject
                            name="tags"
                            type="tags"
                            control={control}
                            preloadedValues={preloadedValues}
                        />
                    </div>
                    <input
                        type="submit"
                        id="submit"
                    />
                </form>
            </div>
        </div>
    );
}

export default Form;