<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>giải bài tập</title>
</head>
<body>
    <?php 
        $priorityCode = ["MHS2707","MHS2020","MHS0720"]; // ưu tiên thì + 0.5 điểm
        $tontai = false;

        // kiểm tra thông tin nhập 
        if(!isset($_POST['fullName']) && !isset($_POST['studentCode']) && !isset($_POST['math']) && !isset($_POST['literature']) && !isset($_POST['physical']) )
          { }   // không tồn tại giá trị 
            else  
                {
                    $name = $_POST['fullName'];
                    $mshs = $_POST['studentCode'];
                    $math = $_POST['math'];
                    $literature = $_POST['literature'];
                    $physical = $_POST['physical'];

                    if($name == '' &&  $mshs == ''  && $math == ''  && $literature == '' && $physical == ''  )
                    {
                        echo "vui lòng điền giá trị cho tất cả các mục";  //tồn tại giá trị bằng rỗng
                    }
                        elseif($name == '' )
                        {
                            echo "vui long nhap ho va ten";
                        }
                        elseif($mshs == '' )
                        {
                            echo "vui long nhap mshs";
                        }
                        elseif($math == '')
                        {
                            echo "Vui lòng nhập điểm của môn Toán";
                        }
                        // tính điều kiện của score
                        elseif($math < 0 || $math > 10)
                        {
                            echo "Vui lòng nhập lại điểm môn Toán trong khoảng từ 1 đến 10";
                        }
                        elseif($literature  == '')
                        {
                            echo "Vui lòng nhập điểm của môn Văn";
                        }
                        // tính điều kiện của score
                        elseif($literature < 0 || $literature > 10)
                        {
                            echo "Vui lòng nhập lại điểm môn Văn trong khoảng từ 1 đến 10";
                        }
                        elseif($physical == '')
                        {
                            echo "Vui lòng nhập điểm của môn Vật lý";
                        }
                        // tính điều kiện của score
                        elseif($physical < 0 || $physical > 10)
                        {
                            echo "Vui lòng nhập lại điểm môn Vật lý trong khoảng từ 1 đến 10";
                        }
          
                        else
                        {
                            $msg1 = 'Không nằm trong danh sách ưu tiên.';       
                            // tính điểm trung bình
                            $average = ($math + $literature + $physical)/3;
                            for($i = 0; $i < count($priorityCode); $i++)
                            {
                                // công điểm ưu tiên nếu có (0.5)
                                
                                //var_dump([$priorityCode[$i], $priorityCode[$i] == $mshs]);
                                if($priorityCode[$i] == $mshs)
                                {
                                    $tontai = true;
                                    $average+= 0.5; 
                                    $msg1 = "Nằm trong danh sách ưu tiên."; break;
                                }    
                            }
                            //  in ra kết quả khảo sát
                            $kq = '';
                            if ($average < 4)  //  0 ~ <4 Không vượt qua khảo sát.
                            {
                                 $kq = "Không vượt qua khảo sát. ";
                            }
                            elseif($average < 6.5) //  4  < 6.5   Khảo sát đạt mức trung bình.
                            {
                                 $kq = "Khảo sát đạt mức trung bình. ";
                            }  
                            elseif($average < 8.5)  // 8.5~10; Khảo sát đạt mức giỏi.
                            {
                                 $kq = " Khảo sát đạt mức khá. ";
                            }  
                            else  // lam tron 0.25 = 0.5; 0.75 = 1;
                            {
                                 $kq = "Khảo sát đạt mức giỏi.";
                            }  

                             echo "Họ tên: ".$name.
                                  "<br>MSHS: ".$mshs.
                                  "<br> UT: ".$msg1.
                                  "<br>Điểm Môn: Toán - ".$math."| Văn - ".$literature." | Lý - ".$physical.
                                  "<br>DTB: ".$average.
                                  "<br>Kết quả: ".$kq;
                        }                          
                }   

    ?>
    <h2>kết quả khảo sát học sinh</h2>
    <form method="POST">
        <p>
            <label for="fullName"> Họ tên: </label>
            <input type="text" name="fullName" />
        </p>
        <p>
            <label for="studentCode">MSHS: </label>
            <input type="text" name="studentCode" />
        </p>
        <p>
            <label for="math" >Điểm Môn: toán </label>
            <input type="number" name="math"  />

            <label for="literature"> văn </label>
            <input type="number" name="literature" />

            <label for="physical"> lý </label>
            <input type="number" name="physical" />
        </p>
        <p>
            <input type="submit" name="" value="Khảo sát" />
        </p>
    </form>

    <p>Kết quả in mẫu: </p>

    <p>
    <b>Kết quả in mẫu:</b><br>
    Họ tên: Nguyen Văn A<br>
    MSHS: MS3456<br>
    UT: Không nằm trong danh sách ưu tiên. <br>
    Điểm Môn: Toán - 5 | Văn -5 | Lý - 5<br>
    DTB: 5<br>
    Kết quả: Khảo sát đạt mức trung bình.<br>
    </p>
    <p>
        Tính điểm trung bình học sinh vừa đạt được, in ra kết quả khảo sát. <br>
        Từ 0 đến 4: Không vượt qua khảo sát. <br>
        Từ 4 đến bé hơn 6,5: Khảo sát đạt mức trung bình. <br>
        Từ 6,5 đến bé hơn 8,5: Khảo sát đạt mức khá. <br>
        Từ 8,5 đến 10: Khảo sát đạt mức giỏi. <br>
   </p>
   <p>
   Điểm được nhập vào phải là số nguyên dương, điểm tối đa được nhập là 10, <br>
   nếu học sinh đó có nằm trong danh sách ưu tiên thì được cộng thêm 0.5.
   </p>

</body>
</html>