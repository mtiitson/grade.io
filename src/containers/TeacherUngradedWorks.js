import React, { Component, PropTypes } from 'react';
import WorksList from '../components/WorksList';

export default class TeacherGradedWorks extends Component {
    works = [
        {
            date: new Date(),
            title: "UI:Kassid",
            authors: ['Mati Kaal', 'Jüri Pootsmann']
        },
        {
            date: new Date(),
            title: "UI:Nurgelised kassid",
            authors: ['Mati Kaal', 'Jüri Pootsmann']
        },
        {
            date: new Date(),
            title: "UI:Kassid",
            authors: ['Ahti Lastilahti', 'Viru Valg']
        },
        {
            date: new Date(),
            title: "UI:Kassid",
            authors: ['Ahti Lastilahti', 'Viru Valg']
        },

        {
            date: new Date(),
            title: "UI:Kassid",
            authors: ['Ahti Lastilahti', 'Viru Valg']
        },
        {
            date: new Date(),
            title: "UI:Kassid",
            authors: ['Ahti Lastilahti', 'Viru Valg']
        },
        {
            date: new Date(),
            title: "UI:Kassid",
            authors: ['Ahti Lastilahti', 'Viru Valg']
        },
        {
            date: new Date(),
            title: "UI:Kassid",
            authors: ['Ahti Lastilahti', 'Viru Valg']
        },
        {
            date: new Date(),
            title: "UI:Kassid",
            authors: ['Ahti Lastilahti', 'Viru Valg']
        },
        {
            date: new Date(),
            title: "UI:Kassid",
            authors: ['Ahti Lastilahti', 'Viru Valg']
        },
        {
            date: new Date(),
            title: "UI:Kassid",
            authors: ['Ahti Lastilahti', 'Viru Valg']
        },
        {
            date: new Date(),
            title: "UI:Kassid",
            authors: ['Ahti Lastilahti', 'Viru Valg']
        },
        {
            date: new Date(),
            title: "UI:Kassid",
            authors: ['Ahti Lastilahti', 'Viru Valg']
        },
        {
            date: new Date(),
            title: "UI:Kassid",
            authors: ['Ahti Lastilahti', 'Viru Valg']
        },
        {
            date: new Date(),
            title: "UI:Kassid",
            authors: ['Ahti Lastilahti', 'Viru Valg']
        },
        {
            date: new Date(),
            title: "UI:Kassid",
            authors: ['Ahti Lastilahti', 'Viru Valg']
        },
        {
            date: new Date(),
            title: "UI:Kassid",
            authors: ['Ahti Lastilahti', 'Viru Valg']
        },
    ]
    render() {
        return <WorksList works={this.works} />;
    }
}
