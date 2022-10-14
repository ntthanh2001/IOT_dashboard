var xValues = [1,2,3];
var yValues0 = [4,5,6];
var yValues1 = [7,8,9];
var yValues2 = [7,8,9]; 

function main() {
    var ran1 = Math.floor((Math.random()*100) + 1);
    var ran2 = Math.floor((Math.random()*100) + 1);
    var ran3 = Math.floor((Math.random()*100) + 1);
    //==========================================hàm chech value=============================================
    function check_value(){
        //xuất giá trị
        document.getElementById("tem").innerHTML= ran1 + ' C';
        document.getElementById("hum").innerHTML= ran2 + ' %';
        document.getElementById("lux").innerHTML= ran3 + ' lux';
        // đổi màu 
        if ( ran1>=40 ){
            document.getElementById("nd").style.backgroundColor = 'rgb(177, 42, 49)';
        }
        else if ( ran1 >= 20 && ran1 <= 40 ){
            document.getElementById("nd").style.backgroundColor = 'rgb(105, 47, 49)';
        }
        else {
            document.getElementById("nd").style.backgroundColor = 'rgb(117, 169, 199)';
        }

        if ( ran2>=40 ){
            document.getElementById("da").style.backgroundColor = 'rgb(105, 181, 219)';
        }
        else if ( ran2 >= 20 && ran2 <= 40 ){
            document.getElementById("da").style.backgroundColor = 'rgb(105, 181, 170)';
        }
        else {
            document.getElementById("da").style.backgroundColor = 'rgb(110, 119, 153)';
        }

        if ( ran3>=40 ){
            document.getElementById("as").style.backgroundColor = 'rgb(254, 201, 111)';
        }
        else if ( ran3 >= 20 && ran3 <= 40 ){
            document.getElementById("as").style.backgroundColor = 'rgb(218, 178, 27)';
        }
        else {
            document.getElementById("as").style.backgroundColor = 'rgb(87, 21, 0)';
        }
    }

    check_value();



    document.getElementById("tem").innerHTML= ran1 + ' C';
    document.getElementById("hum").innerHTML= ran2 + ' %';
    document.getElementById("lux").innerHTML= ran3 + ' lux';

    var currDate = new Date();
    var h =  currDate.getHours();
    var m = currDate.getMinutes();
    var s = currDate.getSeconds();
    var tg = h +":" + m + ":"+ s;
    function update_data(){
        xValues.push(tg);
        yValues0.push(ran1);
        yValues1.push(ran2);
        yValues2.push(ran3);
        if (xValues.length > 10){
            xValues.shift();
            yValues0.shift();
            yValues1.shift();
            yValues2.shift();
        }
    }
    update_data();
    new Chart(document.getElementById("myChart"), {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            
            backgroundColor:  "red",
            borderColor: "#3e95cd",
            data: yValues0,
            label: "nóng"
        },
        {
            fill: false,
            backgroundColor: "green",
            borderColor: "#8e5ea2",
            data: yValues1,
            label: "ẩm"
        },
        {
            fill: false,
            backgroundColor: "green",
            borderColor: "#3cba9f",
            data: yValues2,
            label: "sáng"
            } 
        ]
    },
    options: {
        legend: {display: true},
        title :{
            text:"Đồ thị ",
            display: true,
            fontsize: 20
        }
    }
    });

    setTimeout(main,2000);

    }
main();


function bulb_on2() {
    document.getElementById("bulb2").src='template/pic_bulbon.gif';
}
function bulb_off2() {
    document.getElementById("bulb2").src='template/pic_bulboff.gif';
}
document.getElementById("button1").onclick = function() {bulb_on2()}
document.getElementById("button2").onclick = function() {bulb_off2()}

//===================================================================


