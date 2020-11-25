<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
//Tính tổng số nguyên chẵn từ 1 -> n 
$n = 10;
$S=0;
for ( $i=1; $i<=$n; $i++)
  {
  if ($i%2==0)
    {
      $S+=$i;
    } 
  }
echo " tong cac so chang la:". $S;

//Cho hai mảng array1, array2 với các phần tử bất kỳ, kiểm tra và in ra dòng thông báo mảng
//nào chứa nhiều phần tử hơn (nếu hai mảng bằng nhau, in ra một dòng thông báo tương tự), 
//và nhiều hơn bao nhiêu phần tử.
//(Gợi ý: Dùng hàm đếm số phần tử của từng mảng để tính toán.)
$a=[1,2,4,6,7,7,8];
$a1 = count($a);
$b=[25,5,67,56,24,67,77,78,97];
$b1 = count($b);
if ($a1>$b1)
  {
    echo " mang a co nhieu phan tu hon mang b";
  }
elseif ($a1<$b1)
  {
    echo " mang b co nhieu phan tu hon mang a";
  } 
else echo " 2 mang bang nhau";

// cach 2 : dung 2 if , tra ve ngay ket qua khi thoa dieu kien


//Cho hai mảng array1, array2 với các phần tử bất kỳ, kiểm tra và in ra dòng thông báo mảng
//Cho mảng fruits = ['orange', 'lemon', 'apple', 'cherry', 'mango', 'cherry'],
//tìm xem cherry có xuất hiện trong mảng fruits hay không, 
//in ra dòng thông báo, nếu có thì xuất hiện bao nhiêu lần.
//(Gợi ý: Tìm xem cherry có tồn tại trong fruits, nếu tìm thấy, bắt đầu đếm số lần xuất hiện.)


$fruits = ['orange', 'lemon', 'apple', 'cherry', 'mango', 'cherry'];
$cherry = 'cherry';
$tontai = false;
$dem = 0;

for( $i = 0; $i < count($fruits); $i++)
{
  if($fruits[$i] == $cherry)
       {
          $tontai = true;
          $dem = $dem+1;

       }
       
}

if ($tontai == false)
{
  echo " k tim thay";
}
else
{
   echo " co ton tai cherry trong mang <br>";
   echo " cherry xuat hien ".$dem. " lan";
}
?>
</body>
</html>