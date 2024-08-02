export default {
    name: "AHT10",    
    description: "ปลั๊กอินสำหรับใช้งานกับเซนเซอร์ AHT10",
    category: "Sensors", //Communication,Data Processing,Data Storage,Display,Sensors,Signal Input/Output,Timing,Other
    author: "Khomdet Phueadphut",
    version: "1.0.0",
    icon: "/static/aht10-full.jpg",
    color: "#8b507c",
    blocks: [
        {
            xml : 
                `<block type="aht10_init">
                    <value name="address">
                        <shadow type="math_number">
                            <field name="NUM">0x38</field>
                        </shadow>
                    </value>
                </block>`
        },
        "aht10_read"
    ]
}
