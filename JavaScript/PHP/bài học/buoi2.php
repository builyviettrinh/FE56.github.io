echo 'xác định chẵn lẻ'."<br/>";
$n= 10;
if ( $n% 2 == 0 )
{
  echo "day la so chan <br/>";
}
else
{
  echo " day la so le  <br/>";
}

echo 'in ca so nguyen duong tu 1~n, voi n la 1 so nguyen duong duoc cho san <br/>';
$n= 4;
$S = 0;
for($i=1; $i<=$n;$i++ )
{
  echo $i."<br>";
  //$S= $S + $i; 1 cach viet khac
  $S+=$i;
}
echo " tong cac so da in la:". $S;

echo " cho 1 day so nguyen duong tu 1~n, in ra day so chan va day so le <br/>";

$n = 4;
$chan = []; // khai bao 1 mang rong
$le = [];
for ($i=1; $i<= $n; $i++)
{
  if($i % 2 == 0)
    {
      $chan[] = $i; //cu phap them phan tu vao mang    
    }
  else
    {
      $le[] = $i;     
    }
}
// var_dump(value) : dung de in ra gia tri cua phan tu( value), thuong dung de debug
      var_dump( " day la day so chan: ");
      var_dump(  $chan);
echo "<br/>";
      var_dump( " day la day so le: "); 
      var_dump( $le); 

echo "<br/> day la day so chan";
for ( $i = 0; $i< count($chan); $i++)
{
  echo $chan[$i].",";
}

$mang = ["sach","viet", "Thuoc","viet chi"];
$phanTu = "thuoc";
$tonTai = false;

for($i = 0; $i< count($mang); $i++)
{
  if($mang[$i] ==$phanTu)
    {
      $tonTai = true;
      echo "co gia tri can tim dang nam o vi tri: ".$i; break;     
    }
  
}
if ($tonTai == false)
{
  echo " khong tim thay gia tri tuong ung";
}
echo " phan loai hoc sinh kha(>= 6d), gioi (> 8), TB(>4), con lai la yeu  <br>";
// yeu = 0 ~ =4;
//  TB = >4 ~ <6;
// kha = 6 ~ 8;
// gioi = >8~10;

$diem= 5;
if($diem > 8)
{
  echo " hoc sinh gioi";
}
else if($diem >= 6 )
{
  echo " hoc sinh kha";
}
else if($diem > 4)
{
  echo " hoc sinh TB";
}
else
{
  echo " hoc sinh yeu";
}


echo " phan loai hoc sinh kha(>= 6d), gioi (> 8), TB(>4), con lai la yeu  <br>";
// yeu = 0 ~ =4;
//  TB = >4 ~ <6;
// /kha = 6 ~ 8;
// gioi = >8~10;
// lam tron 0.25 = 0.5; 0.75 = 1;

$diem= 7.75;
$tam = (int)$diem;
$du = $diem - $tam;

if ($du == 0.25 || $du == 0.75) // dieu kien kep
  $diem+= 0.25;  // $diem = $diem +  0.25

  echo $diem."<br>";

if($diem >= 8)
{
  echo " hoc sinh gioi";
}
else if($diem >= 6 )
{
  echo " hoc sinh kha";
}
else if($diem > 4)
{
  echo " hoc sinh TB";
}
else
{
  echo " hoc sinh yeu";
}

