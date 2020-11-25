<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>giai bai tap 21/7 </title>
</head>
<body>
 <p>   
BT1
Cho lớp học gồm 2 nhóm
Nhóm A gồm 3 học sinh: Nguyễn Khoa, Anh Tuấn, Ngọc Huệ </br>
Nhóm B gồm 4 học sinh: Kha Ly, Hồng Ân, Lý Thế, Huỳnh Như <br>
Viết chương trình tìm kiếm, nhập tên học sinh, tìm xem học sinh có trong lớp đã cho hay không, in ra tên nhóm của học sinh đó.<br>
Gợi ý:
1 tìm lần lượt trong từng nhóm, 2 vòng lặp riêng
2. Giao diện gồm một input name và 1 button search. <br>
</p>
<?php
    $teamA = ['Nguyễn Khoa','Anh Tuấn', 'Ngọc Huệ'];
    $teamB = ['Kha Ly','Hồng Ân', 'Lý Thế','Huỳnh Như'];
    $tontai = false;
    if(isset($_POST['studentName']) && $_POST['studentName'] == '')
    {
        echo " vui long nhap gia tri";
    }
    if(isset($_POST['studentName']) && $_POST['studentName'] != '')
    {
        $name = $_POST['studentName'];
        for ($i=0; $i< count($teamA); $i++ )
        {
            if($teamA[$i] == $name)
            {
                $tontai = true;
                echo "hoc sinh ".$name." thuoc nhom A"; break;
            }        
        }
        for ($j=0; $j< count($teamB); $j++)
        {
            if($teamB[$j] == $name)
            {
                $tontai = true;
                echo " hoc sinh ".$name." thuoc nhom B"; break;
            }
        }
        if ( $tontai == false)
        {
            echo " hoc sinh ".$name." khong ton tai trong nhom";
        }
    }
    
      // echo " khong pai hoc sinh cua lop nay ";
?>

<h4> Search </h4>
<form method="POST">
    <label> Student Name </label>
        <input type="text" name="studentName" />
        <input type="submit" name ="search" value="search">

<p>
BT2
Nhập hai phần tử bất kỳ, in ra dãy số lẻ nằm giữa hai phần tử, tính tổng các số lẽ vừa tìm được.<br>
Gợi ý: 
1. Trước tiên phải so sánh hai số được nhập bất kỳ, để tìm ra số nào là bắt đầu và số nào là kết thúc.<br>
2. Vì là tìm dãy nằm giữa nên hai phần tử được nhập vào sẽ không được tính vào dãy số lẽ.<br>
3. Giao diện gồm 2 input number 1,2 và 1 button submit
</p>
<?php 
    // kiem tra st1 va st2 co ton tai hay k
 
    // kiem tra st1 va st2 co khac rong hay k
    if(isset($_POST['st1']) && isset($_POST['st2']))
    {
        if($_POST['st1'] =='' && $_POST['st2'] =='')
        {
            echo " vui long nhap st1 va st2";
        }
        elseif($_POST['st1'] =='')
        {
            echo " vui long nhap st1";
        }
        elseif($_POST['st2'] =='')
        {
            echo " vui long nhap st2";
        }
        else
        {
            // Truong hop nhap so am thi bao loi vui long nhap so nguyen duong
            if($_POST['st1'] < 0 && $_POST['st2'] < 0 )
            {
                echo "vui long nhap st1 va st2 la so nguyen duong ";
            }             
            elseif($_POST['st1'] < 0 )
            {
                echo "vui long nhap st1 la so nguyen duong ";
            }
            elseif($_POST['st2'] < 0 )
            {
                echo "vui long nhap st2 la so nguyen duong ";
            }

            else          
            {
                // so sanh 2 so da nhap
                if ( $_POST['st1'] > $_POST['st2'])
                {
                    // so bat dau = st2, so ket thuc = st1
                    $batdau = $_POST['st2'];
                    $ketthuc = $_POST['st1'];
                }
                else
                {
                    // so bat dau = st1, so ket thuc = st2
                    $batdau = $_POST['st1'];
                    $ketthuc = $_POST['st2'];
                }
    
                // chay vong lap cac so nam o giua
                $S = 0;
                $chuoi = '';
                $tontai = false;
                for($i = $batdau+1; $i < $ketthuc; $i++)
                {
                    // in ra day so le 
                    if($i % 2 != 0)
                    {
                        $tontai = true; 
                        $chuoi.= $i.","; // noi chuoi. vd: chuoi ='abc' , $i=A => noi chuoi: abcA
                        // tinh tong
                        $S+= $i;
    
                    }
                }
    
                // Truong hop khong tim thay gia tri can tim thi in ra dong thong bao
                // vui long nhap st1 va so thu 2 cach nhau 3 don vi
                if($tontai == false )
                {
                    echo "vui long nhap st1 va so thu 2 cach nhau 3 don vi ";
                }
                else
                {
                    echo " <br> day so le la :  ".$chuoi;
                    echo " <br> tong cac so le trong day so la: ".$S;                
                }
            }

        }
    }



?>  
<h4> Tinh tong chan le</h4>
<form method="POST">
        <label> so thu 1 </label>
        <input  name="st1" type="number"  />
         <label> so thu 2 </label>
        <input type="number" name="st2" />
        <input type="submit" value="Tinh" />
    </form>  
    
</body>
</html>