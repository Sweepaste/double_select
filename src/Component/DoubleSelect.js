import React, { useEffect, useState } from 'react'
import './DoubleSelect.css'
const items = [
    {
      name: "apple",
      category: "fruit"
    },
    {
      name: "Cucumber",
      category: "vegetable"
    },
    {
      name: "Banana",
      category: "fruit"
    },
    {
      name: "Celery",
      category: "vegetable"
    },
    {
      name: "orange",
      category: "fruit"
    },
    {
      name: "sausage",
      category: "meat"
    },
    {
      name: "bacon",
      category: "meat"
    }
  ];
const DoubleSelect = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [listMap, setlistMap] = useState({});
    useEffect(() => {
        const data = {};
        items.forEach((item) => {
            if (data[item.category]) {
                data[item.category].push(item.name);
            } else {
                data[item.category] = [item.name];
            }
        })
        setlistMap(data);
        setSelectedCategory(Object.keys(data)[0]);
        setSelectedName(data[Object.keys(data)[0]][0]);
    }, [])
    
    const handleCategoryOnChange = (e) => {
        setSelectedCategory(e.target.value);
        setSelectedName(listMap[e.target.value][0])
    }

    const handleNameOnChange = (e) => {
        setSelectedName(e.target.value);
    }
    return (
        <div>
            <div className='selected_content'><h1>{selectedName}</h1></div>
            <div className='double_select'>
                <div>
                    <select value={selectedCategory} onChange={handleCategoryOnChange}>
                        {Object.keys(listMap).map((item, index) => {
                            
                            return (<option key={index}>{item}</option>)
                        })}
                    </select>
                </div>
                <div>
                    <select value={selectedName} onChange={handleNameOnChange}>
                        {listMap[selectedCategory] && listMap[selectedCategory].map((item, index) => {
                            return (<option key={index}>{item}</option>)
                        })}
                    </select>
                </div>
            </div>
            
        </div>
    )
}


export default DoubleSelect;
