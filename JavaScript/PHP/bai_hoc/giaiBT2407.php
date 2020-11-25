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
                    else
                    {
                         // điều kiện của score
                         if($literature != '' && $physical != '' && $math <= 0 && $literature <= 0 && $physical <= 0)
                         {
                             echo " Vui lòng nhập lại điểm số của 3 môn";
                         }
                            elseif( $literature != '' && $math <= 0 && $literature <= 0)
                            {
                                echo " Vui lòng nhập lại điểm môn Toán, Văn";
                            }
                            elseif( $physical != '' && $math <= 0 && $physical <= 0)
                            {
                                echo " Vui lòng nhập lại điểm môn Toán, Vật lý";
                            }
                            elseif($literature != '' && $physical != '' && $literature <= 0 && $physical <= 0)
                            {
                                echo " Vui lòng nhập lại điểm môn văn,Vật lý";
                            }
                            elseif( $math <= 0)
                            {
                                echo " Vui lòng nhập lại điểm môn Toán";
                            }
                            elseif($name != '' &&  $mshs != ''  && $math != ''  && $literature == ''  )
                            {
                                echo "Vui lòng nhập điểm của môn Văn";
                            }
                            elseif( $literature <= 0)
                            {
                                echo " Vui lòng nhập lại điểm môn Văn";
                            }
                            elseif($name != '' &&  $mshs != ''  && $math != ''  && $literature != '' && $physical == ''   )
                            {
                                echo "Vui lòng nhập điểm của môn Vật lý";
                            }

                            elseif( $literature <= 0 && $physical <= 0)
                            {
                                echo " Vui lòng nhập lại điểm môn Văn, Vật lý";
                            }
                            elseif($physical <= 0)
                            {
                                echo " Vui lòng nhập lại điểm môn Vật lý";
                            }
                            // điểm tối đa được nhập là 10
                            elseif($math > 10 || $literature > 10 || $physical > 10)
                            {
                                echo " điểm tối đa được nhập là 10";
                            }
                        else
                        {
                            // tính điểm trung bình
                            $average = ($math + $literature + $physical)/3;
                            for($i = 0; $i < count($priorityCode); $i++)
                            {
                                // công điểm ưu tiên nếu có (0.5)
                                if($priorityCode[$i] == $mshs)
                                {
                                    $tontai = true;
                                    $average+= 0.5; break;
                                }    
                                else
                                {
                                }
                            }

                            //  in ra kết quả khảo sát
                            if ($average < 4)  //  0 ~ <4 Không vượt qua khảo sát.
                            {
                                echo "Diem trung binh la ".$average." .Không vượt qua khảo sát. ";
                            }
                            elseif($average < 6.5) //  4  < 6.5   Khảo sát đạt mức trung bình.
                            {
                                echo "Diem trung binh la ".$average." .Khảo sát đạt mức trung bình. ";
                            }  
                            elseif($average < 8.5)  // 8.5~10; Khảo sát đạt mức giỏi.
                            {
                                echo "Diem trung binh la ".$average." .Khảo sát đạt mức khá. ";
                            }  
                            else  // lam tron 0.25 = 0.5; 0.75 = 1;
                            {
                                echo "Diem trung binh la ".$average." .Khảo sát đạt mức giỏi.";
                            }                         
                        }    
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