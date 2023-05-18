import { useState, useEffect } from "@wordpress/element";
import { PanelBody } from "@wordpress/components";
import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';

import { TextControl } from "@wordpress/components"

const edit = ({ attributes: { tabledata, tabletitle }, setAttributes }) => {
    const blockprops = useBlockProps();
    const [loading, setLoading] = useState(true);
    const getuser = async () => {
        const request = await fetch("https://jsonplaceholder.typicode.com/users");
        const response = await request.json();
        if (response) {

            const users = response.map(user => {
                return { ...user, extrafield: '' }
            })
            setLoading(false);
            setAttributes({ tabledata: users });
        }
    }

    const updateExtraField = (id, value) => {
        const updatedExtra = tabledata.map(table => {
            if (table.id == id) {
                table.extrafield = value;
            }
            return table;
        });

        setAttributes({ tabledata: updatedExtra });
    }
    useEffect(() => {
        getuser();
    }, [])
    if (loading) {
        return '...Loading';
    }
    return (
        <div {...blockprops}>
            {console.log(tabledata)}
            <InspectorControls key="setting">
                <PanelBody initialOpen={true} title="User Table">
                    <TextControl
                        label="Table Title"
                        value={tabletitle}
                        onChange={(value) => setAttributes({ tabletitle: value })}
                    />
                </PanelBody>
            </InspectorControls>
            <div className="font-Outfit">
                <h2 className="text-center mb-6 font-bold ">{tabletitle}</h2>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Username
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Email
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Address
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Phone
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Website
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Company
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Extra Field
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.isArray(tabledata) && tabledata.map((table, index) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {table.name}
                                        </th>
                                        <td className="px-6 py-4">{table.username}</td>
                                        <td className="px-6 py-4">{table.email}</td>
                                        <td className="px-6 py-4">{`${table.address.street}, ${table.address.suite}, ${table.address.city}, ${table.address.zipcode},Lang:${table.address.geo.lat} Lat:${table.address.geo.lng}`}</td>
                                        <td className="px-6 py-4">{table.phone}</td>
                                        <td className="px-6 py-4">{table.website}</td>
                                        <td className="px-6 py-4">{`${table.company.name},${table.company.catchPhrase},${table.company.bs}`}</td>
                                        <td className="px-6 py-4"><input type="text" onChange={(e) => updateExtraField(table.id, e.target.value)} value={table.extrafield} /></td>

                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    )
}

export default edit