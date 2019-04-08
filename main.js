var convertWhat = prompt("Please select 1.Convert feet to meter or 2.Convert meter to feet");
switch (Number(convertWhat)) {
    case 1:
        convert_feet_to_meter();
        break;
    case 2:
        convert_meter_to_feet();
        break;
}