using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using LuanVan.Models;
using PagedList;
using PagedList.Mvc;




namespace LuanVan.Areas.Admin.Controllers
{
    public class AdminController : Controller
    {
        private Models.db_totnghiepEntities dc = new Models.db_totnghiepEntities();
        //private int banan_current_id = 0;
        // GET: Admin/admin
        public ActionResult Index()
        {
            return View();
        }
        //hiển thị danh sách loại món ăn
        public ActionResult LstLoaiMonAn()
        {
            return View(dc.LoaiMonAns.ToList());
        }
        //hiển thị form thêm loại món ăn
        public ActionResult formThemloaimonan()
        {
            return View("formThemloaimonan");
        }
        //action thêm loại món ăn
        [HttpPost]
        public ActionResult actThemLoaiMonAn(Models.LoaiMonAn lma)
        {
            Models.LoaiMonAn x = dc.LoaiMonAns.Find(lma.loaimonan_id);
            if (x == null)
            {
                dc.LoaiMonAns.Add(lma);
                dc.SaveChanges();
                return RedirectToAction("LstLoaiMonAn");
            }
            return View("formThemloaimonan");
        }
        //form sửa loại món ăn
        public ActionResult formSualoaimonan(string id)
        {
            Models.LoaiMonAn x = dc.LoaiMonAns.Find(id);
            if (x != null)
            {
                return View(x);
            }
            return RedirectToAction("LstLoaiMonAn");
        }
        //action sửa loại món ăn
        [HttpPost]
        public ActionResult actSuaLoaiMonAn(Models.LoaiMonAn lma)
        {
            if (ModelState.IsValid)
            {
                Models.LoaiMonAn x = dc.LoaiMonAns.Find(lma.loaimonan_id);
                if (x != null)
                {
                    x.loaimonan_id = lma.loaimonan_id;
                    x.loaimonan_ten = lma.loaimonan_ten;
                    dc.SaveChanges();
                }
                return RedirectToAction("LstLoaiMonAn");
            }
            return View("formThemloaimonan");
        }
        //action xóa loại món ăn
        public ActionResult actxoaloaimonan(string id)
        {
            Models.LoaiMonAn x = dc.LoaiMonAns.Find(id);
            //sqlkiemtra
            var kt = new Models.db_totnghiepEntities();
            var ktmonan = kt.MonAns.SqlQuery("Select * from MonAn where loaimonan_id=@id", new SqlParameter("@id", id)).FirstOrDefault();

            if (ktmonan == null)
            {
                if (x != null)
                {

                    dc.LoaiMonAns.Remove(x);
                    dc.SaveChanges();
                    return Redirect("/Admin/admin/LstLoaiMonAn");
                }
            }
            return Redirect("/Admin/admin/LstLoaiMonAn");
        }
        //hiện thị danh sách món ăn
        public ActionResult LstMonan()
        {
            return View(dc.MonAns.ToList());
        }
        //hiển thị form thêm món ăn
        public ActionResult formThemMonAn()
        {
            SelectList ds = new SelectList(dc.LoaiMonAns.ToList(), "loaimonan_id", "loaimonan_ten");
            ViewBag.dsloaimonan = ds;
            SelectList dsNguyenLieu = new SelectList(dc.NguyenLieux.ToList(), "nguyenlieu_id", "nguyenlieu_ten");
            ViewBag.dsnguyenlieu = dsNguyenLieu;
            return View("formThemMonAn");
        }
        //xulihinh
        //nhận giá trị gửi về từ ajax, và đối tượng gửi về là file
        [HttpPost]
        public ActionResult goifile(HttpPostedFileBase file)
        {
            Session["tenfilehinh"] = "";
            ViewBag.tenfile = "";
            if (file != null)
            {
                Session["tenfilehinh"] = file.FileName;
                //Request.PhysicalApplicationPath trả về đường dẫn đến ứng dụng của mình.
                string tenfile = Request.PhysicalApplicationPath + @"Areas/Admin/ImageTemp/" + file.FileName;
                file.SaveAs(tenfile);
                ViewBag.tenfile = @"/Areas/Admin/ImageTemp/" + file.FileName;
            }
            return View();
        }
        // action thêm món ăn
        [HttpPost]
        public ActionResult actthemMonAn(Models.MonAn ma)
        {
            string tenfiletam = (string)Session["tenfilehinh"]; //tên file tạm
            //Models.MonAn x = dc.MonAns.Find(ma.monan_id);

                if (tenfiletam == "")
                {
                    ma.monan_hinh = "";
                }
                else
                {
                    var kt = new Models.db_totnghiepEntities();
                    var ktid = kt.MonAns.SqlQuery("Select * from MonAn ORDER BY monan_id DESC").ToList();

                    //var getid = kt.MonAns.SqlQuery("Select TOP(1) from MonAn").FirstOrDefault();
                    string tenImg = tenfiletam.Split('.')[0];
                    System.IO.FileInfo fi = new System.IO.FileInfo(tenfiletam);
                    //if (dc.MonAns.ToList().Count() == 0)
                    //{
                        ma.monan_hinh = @"/Areas/Admin/Image/" + tenImg + ( ktid[0].monan_id + 1 ) + fi.Extension;   //lấy phần mở rộng của file ảnh. vdL .jpg //xác định đường dẫn lưu file
                    //}
                    //else
                    //{
                        //ma.monan_hinh = @"/Areas/Admin/Image/" + (dc.MonAns.Count() + 1) + fi.Extension;   //lấy phần mở rộng của file ảnh. vdL .jpg //xác định đường dẫn lưu file
                    //}


                    string tenfile = Request.PhysicalApplicationPath + @"/" + ma.monan_hinh;       //tên file real
                    tenfiletam = Request.PhysicalApplicationPath + @"/Areas/Admin/ImageTemp/" + tenfiletam;
                    System.IO.File.Copy(tenfiletam, tenfile);           //copy từ file tạm qua file real

                    dc.MonAns.Add(ma);
                    dc.SaveChanges();
                }

                return RedirectToAction("LstMonAn");
        }


        //xóa món ăn
        public ActionResult actxoaMonAn(int id)
        {
            Models.MonAn x = dc.MonAns.Find(id);
            if (x != null)
            {
                dc.MonAns.Remove(x);
                dc.SaveChanges();
                return Redirect("/Admin/admin/LstMonan");
            }
            return View("LstMonAn");
        }
        //hiện form sửa món ăn//chuafix
        public ActionResult suamonan(int id)
        {
            Models.MonAn x = dc.MonAns.Find(id);
            if (x != null)
            {
                return View(x);
            }
            return RedirectToAction("LstMonan");
        }
        //action sửa món ăn
        [HttpPost]
        public ActionResult actsuamonan(Models.MonAn ma)
        {
            if (ModelState.IsValid)
            {

                string tenfiletam = (string)Session["tenfilehinh"]; //tên file tạm
                Models.MonAn x = dc.MonAns.Find(ma.monan_id);
                if (x != null)
                {
                    if (tenfiletam == "")
                    {
                        ma.monan_hinh = "";
                    }
                    else
                    {
                        System.IO.FileInfo fi = new System.IO.FileInfo(tenfiletam);
                        ma.monan_hinh = @"/Areas/Admin/Image/" + ma.monan_id + fi.Extension;   //lấy phần mở rộng của file ảnh. vdL .jpg //xác định đường dẫn lưu file

                        string tenfile = Request.PhysicalApplicationPath + @"/" + ma.monan_hinh;       //tên file real
                        tenfiletam = Request.PhysicalApplicationPath + @"/Areas/Admin/ImageTemp/" + tenfiletam;
                        System.IO.File.Copy(tenfiletam, tenfile);           //copy từ file tạm qua file real
                        //
                        x.monan_id = ma.monan_id;
                        x.monan_ten = ma.monan_ten;
                        x.monan_trangthai = ma.monan_trangthai;
                        x.monan_gia = ma.monan_gia;
                        x.loaimonan_id = ma.loaimonan_id;
                        dc.SaveChanges();
                    }
                    return RedirectToAction("LstMonAn");
                }
                return RedirectToAction("LstMonAn");
            }
            return View("suamonan");
        }
        public ActionResult actanmonan(int id)
        {
            Models.MonAn x = dc.MonAns.Find(id);
            if (x != null)
            {
                if (x.monan_trangthai == true)
                {
                    x.monan_trangthai = false;
                }
                else
                {
                    x.monan_trangthai = true;
                }
                dc.SaveChanges();
                return Redirect("/Admin/admin/LstMonan");
            }
            return View("LstMonAn");
        }
        //hiển thị danh sách loại nước uống
        public ActionResult LstLoaiNuocUong()
        {
            return View(dc.LoaiNuocUongs.ToList());
        }
        //form thêm loại nước uống
        public ActionResult formThemloainuocuong()
        {
            return View("formThemloainuocuong");
        }
        //action Thêm Loại Nước Uống
        [HttpPost]
        public ActionResult actThemLoaiNuocUong(Models.LoaiNuocUong lmu)
        {

            Models.LoaiNuocUong x = dc.LoaiNuocUongs.Find(lmu.loainuocuong_id);
            if (x == null)
            {
                dc.LoaiNuocUongs.Add(lmu);
                dc.SaveChanges();
                return RedirectToAction("LstLoaiNuocUong");
            }
            return View("formThemloainuocuong");

        }
        //hiển thị form sửa nước uống
        public ActionResult fromsualoainuocuong(string id)
        {
            Models.LoaiNuocUong x = dc.LoaiNuocUongs.Find(id);
            if (x != null)
            {
                return View(x);
            }
            return RedirectToAction("LstLoaiNuocUong");

        }
        //action sửa loại nước uống
        [HttpPost]
        public ActionResult actsualoainuocuong(Models.LoaiNuocUong lmu)
        {
            if (ModelState.IsValid)
            {
                Models.LoaiNuocUong x = dc.LoaiNuocUongs.Find(lmu.loainuocuong_id);
                if (x != null)
                {
                    x.loainuocuong_id = lmu.loainuocuong_id;
                    x.loainuocuong_ten = lmu.loainuocuong_ten;
                    dc.SaveChanges();
                }
                return Redirect("/Admin/admin/LstLoaiNuocUong");
            }
            return View("formsualoainuocuong");
        }

        //action xóa loại nước uống
        public ActionResult actxoaloainuocuong(string id)
        {
            Models.LoaiNuocUong x = dc.LoaiNuocUongs.Find(id);
            //kiemtrasql
            var kt = new Models.db_totnghiepEntities();
            var ktnuocuong = kt.NuocUongs.SqlQuery("Select * from NuocUong where loainuocuong_id=@id", new SqlParameter("@id", id)).FirstOrDefault();
            if (ktnuocuong == null)
            {

                if (x != null)
                {
                    dc.LoaiNuocUongs.Remove(x);
                    dc.SaveChanges();
                    return Redirect("/Admin/admin/LstLoaiNuocUong");
                }
            }
            return Redirect("/Admin/admin/LstLoaiNuocUong");
        }
        //hiển thị danh sách nước uống
        public ActionResult Lstnuocuong()
        {
            return View(dc.NuocUongs.ToList());
        }
        //hiển thị form thêm nước uống
        public ActionResult formThemNuocUong()
        {
            SelectList ds = new SelectList(dc.LoaiNuocUongs.ToList(), "loainuocuong_id", "loainuocuong_ten");
            ViewBag.dsloainuocuong = ds;
            return View("formThemNuocUong");
        }
        //action thêm nước uống
        [HttpPost]
        public ActionResult actthemnuocuong(Models.NuocUong nu)
        {
            string tenfiletam = (string)Session["tenfilehinh"]; //tên file tạm
            //Models.MonAn x = dc.MonAns.Find(ma.monan_id);

            if (tenfiletam == "")
            {
                nu.nuocuong_hinh = "";
            }
            else
            {
                var kt = new Models.db_totnghiepEntities();
                var ktid = kt.NuocUongs.SqlQuery("Select * from NuocUong ORDER BY nuocuong_id DESC").ToList();

                //var getid = kt.MonAns.SqlQuery("Select TOP(1) from MonAn").FirstOrDefault();
                string tenImg = tenfiletam.Split('.')[0];
                System.IO.FileInfo fi = new System.IO.FileInfo(tenfiletam);
                //if (dc.MonAns.ToList().Count() == 0)
                //{
                nu.nuocuong_hinh = @"/Areas/Admin/Image/" + tenImg + (ktid[0].nuocuong_id + 1) + fi.Extension;   //lấy phần mở rộng của file ảnh. vdL .jpg //xác định đường dẫn lưu file
                //}
                //else
                //{
                //ma.monan_hinh = @"/Areas/Admin/Image/" + (dc.MonAns.Count() + 1) + fi.Extension;   //lấy phần mở rộng của file ảnh. vdL .jpg //xác định đường dẫn lưu file
                //}


                string tenfile = Request.PhysicalApplicationPath + @"/" + nu.nuocuong_hinh;       //tên file real
                tenfiletam = Request.PhysicalApplicationPath + @"/Areas/Admin/ImageTemp/" + tenfiletam;
                System.IO.File.Copy(tenfiletam, tenfile);           //copy từ file tạm qua file real

                dc.NuocUongs.Add(nu);
                dc.SaveChanges();
            }

            return RedirectToAction("LstNuocUong");
        }

        //hiển thị form sửa nước uống
        public ActionResult formsuanuocuong(int id)
        {
            return View("formsuanuocuong");
        }
        //action sửa nước uống
        public ActionResult actsuanuocuong(Models.NuocUong nu)
        {
            if (ModelState.IsValid)
            {
                Models.NuocUong x = dc.NuocUongs.Find(nu.nuocuong_id);
                if (x != null)
                {
                    x.nuocuong_id = nu.nuocuong_id;
                    x.nuocuong_ten = nu.nuocuong_ten;
                    x.nuocuong_hinh = nu.nuocuong_hinh;
                    x.nuocuong_gia = nu.nuocuong_gia;
                    x.loainuocuong_id = nu.loainuocuong_id;

                    dc.SaveChanges();
                }
                return RedirectToAction("Lstnuocuong");
            }
            return View("fromsualoainuocuong");
        }
        //action xóa nước uống
        public ActionResult actXoanuocuong(int id)
        {
            Models.NuocUong x = dc.NuocUongs.Find(id);
            if (x != null)
            {
                dc.NuocUongs.Remove(x);
                dc.SaveChanges();
                return Content("xoa thanh cong");
            }
            return Redirect("/Admin/admin/Lstnuocuong");
        }
        public ActionResult actannuocuong(int id)
        {
            Models.NuocUong x = dc.NuocUongs.Find(id);
            if (x != null)
            {
                if (x.nuocuong_trangthai == true)
                {
                    x.nuocuong_trangthai = false;
                }
                else
                {
                    x.nuocuong_trangthai = true;
                }
                dc.SaveChanges();
                return Redirect("/Admin/admin/Lstnuocuong");
            }
            return View("Lstnuocuong");
        }
        //hiển thị danh sách phòng ăn
        public ActionResult LstPhongan()
        {
            return View(dc.PhongAns.ToList());
        }
        //hiển thị form thêm phòng ăn

        public ActionResult formthemphong()
        {
            return View("formthemphong");
        }
        //action xữ lý thêm phòng
        [HttpPost]
        public ActionResult actthemphongan(Models.PhongAn pa)
        {
            Models.PhongAn x = dc.PhongAns.Find(pa.phongan_id);
            if (x == null)
            {
                if (pa.phongan_id == 0)
                {
                    pa.phongan_id = 1;
                    dc.PhongAns.Add(pa);
                    dc.SaveChanges();
                    return RedirectToAction("LstPhongan");
                }
            }
            return View("formthemphong");
        }
        //hiển thị form sửa thông tin phòng ăn
        public ActionResult formsuaphongan(int id)
        {
            Models.PhongAn x = dc.PhongAns.Find(id);
            if (x != null)
            {
                return View(x);
            }
            return RedirectToAction("LstPhongan");
        }
        //action xữ lý sửa thông tin phòng ăn
        [HttpPost]
        public ActionResult actsuaphong(Models.PhongAn pa)
        {
            if (ModelState.IsValid)
            {
                Models.PhongAn x = dc.PhongAns.Find(pa.phongan_id);
                if (x != null)
                {
                    x.phongan_id = pa.phongan_id;
                    x.phongan_ten = pa.phongan_ten;
                    x.phongan_mota = pa.phongan_mota;
                    x.phongan_trangthai = pa.phongan_trangthai;
                    x.phongan_gia = pa.phongan_gia;
                    x.tongsoban = pa.tongsoban;
                    dc.SaveChanges();
                    return RedirectToAction("LstPhongan");
                }
            }
            return View("formthemphong");
        }

        //hiển thị danh sách bàn ăn
        public ActionResult LstBanAn()
        {
            SelectList dsPa = new SelectList(dc.PhongAns.ToList(), "Phongan_id", "phongan_ten");
            ViewBag.dsPha = dsPa;
            return View();
        }

        //hiển thị danh sách bàn ăn
        public ActionResult showBanAn(int id)
        {
            ViewBag.PaID = id;
            return PartialView("showBanAn",dc.BanAns.ToList());
        }

        //thêm món ăn vào hóa đơn
        public ActionResult formThemMonAnVaoBan(int id)
        {
            //banan_current_id = id;
            ViewBag.BaID = id;
            Models.BanAn ba = dc.BanAns.Find(id);
            ViewBag.BaTen = ba.banan_ten;
            return View(dc.MonAns.ToList());
        }
        //action thêm món ăn vào bàn 
        public ActionResult actThemMonAnVaoBan(int id, int idBan)
        {
            var thongbao = "";
            //var idBan = banan_current_id;
            //int idBanAn = Int32.Parse(idBan.ToString());
            Models.BanAn ba = dc.BanAns.Find(idBan);
            Models.MonAn ma = dc.MonAns.Find(id);
            string session_id = "hoadon" + idBan;
            Models.HoaDon hd = Session[session_id] as Models.HoaDon;
            Models.ChiTietHoaDon cthd = null;
            foreach (var a in hd.ChiTietHoaDons.Where(x => x.monan_id == id))
            {
                cthd = a; break;
            }
            if (cthd == null)
            {
                cthd = new Models.ChiTietHoaDon();
                cthd.monan_id = ma.monan_id;
                cthd.dongia = ma.monan_gia;
                cthd.soluong = 1;
                cthd.hoadon_id = hd.hoadon_id;
                cthd.MonAn = ma;

                hd.ChiTietHoaDons.Add(cthd);
                //thongbao = "<script language='javascript' type='text/javascript'>alert('Thành công!');</script>";
                //ViewBag.thongbao = thongbao;
                Session["Thongbao_Noidung"] = "Thành công!";
                Session["Thongbao_Kieu"] = "alert-success";
                return RedirectToAction("formThemMonAnVaoBan/" + idBan);
                
            }
            else
            {
                cthd.soluong += 1; //int.Parse(Request["soluong"].ToString());
                //thongbao = "<script language='javascript' type='text/javascript'>alert('Thành công!');</script>";
                //return Content(thongbao);
            }
            return RedirectToAction("formThemMonAnVaoBan/" + idBan);
        }
        //hiển thị hóa đơn
         public ActionResult formXemHoaDon(int id)
        {
            ViewBag.BaID = id;
            //return View(dc.ChiTietHoaDons.ToList());
            return View();
        }
        //xóa món ăn trong chi tiết hóa đơn
         public ActionResult xoaChiTietHD(int id, int idBan)
         {
             string session_id = "hoadon" + idBan;
             Models.HoaDon hd = Session[session_id] as Models.HoaDon;
             Models.ChiTietHoaDon cthd = null;
             foreach (var a in hd.ChiTietHoaDons.Where(x => x.monan_id == id))
             {
                 cthd = a; break;
             }
             if (cthd != null)
             {
                 hd.ChiTietHoaDons.Remove(cthd);
             }
             return RedirectToAction("formXemHoaDon/" + idBan);
         }
        //Thanh toán
         [HttpPost]
         public ActionResult actThanhToanHD(string idBan, int tongtienhd)
         {
             string session_id = "hoadon" + idBan;
             var _sessionDB_TT = "datban_thanhtoan" + idBan;
             var idDatBan = Session[_sessionDB_TT];
             Models.DatBan datban = new Models.DatBan(); 
             Models.HoaDon hd = Session[session_id] as Models.HoaDon;


             DateTime _dt = DateTime.Now;
             Models.HoaDon hoadon = new HoaDon();
             //trường hợp thực khách ko có tài khoản mà vô ăn
             if (hd.thuckhach_sdt == null)
             {
                 hoadon.thuckhach_sdt = "0000000";
                 hoadon.banan_id = Int32.Parse(idBan.ToString());
                 if (hoadon.banan_id >= 1 && hoadon.banan_id <= 9)
                 {
                     hoadon.phongan_id = 1;
                 }
                 else if (hoadon.banan_id >= 9 && hoadon.banan_id <= 17)
                 {
                     hoadon.phongan_id = 2;
                 }
                 else if (hoadon.banan_id >= 18 && hoadon.banan_id <= 21)
                 {
                     hoadon.phongan_id = 3;
                 }
                 else if (hoadon.banan_id >= 22 && hoadon.banan_id <= 25)
                 {
                     hoadon.phongan_id = 4;
                 }
                 else if (hoadon.banan_id == 46)
                 {
                     hoadon.phongan_id = 6;
                 }
             }
             else
             {
                 hoadon.thuckhach_sdt = hd.thuckhach_sdt;
                 datban = dc.DatBans.Find(Int32.Parse(idDatBan.ToString()));
                 //đặt lại trạng thái của đơn đặt bàn
                 datban.datban_trangthai = true;
                 hoadon.phongan_id = hd.phongan_id;
                 hoadon.banan_id = hd.banan_id;
             }
             hoadon.hoadon_monan_tonggia = tongtienhd;
             hoadon.hoadon_tongtien = tongtienhd;
             hoadon.hoadon_ngaylap = _dt;
             //
             foreach (var a in hd.ChiTietHoaDons)
             {
                 Models.ChiTietHoaDon cthd = new ChiTietHoaDon();
                 cthd.hoadon_id = hoadon.hoadon_id;
                 cthd.monan_id = a.monan_id;
                 cthd.nuocuong_id = a.nuocuong_id;
                 cthd.soluong = a.soluong;
                 cthd.dongia = a.dongia;
                 
                 hoadon.ChiTietHoaDons.Add(cthd);
             }
             //
             dc.HoaDons.Add(hoadon);
             dc.SaveChanges();
             //
             Session[session_id] = new Models.HoaDon();
             Session[_sessionDB_TT] = null;
             return RedirectToAction("LstBanAn");
         }
         //Thanh toán nhiều bàn
         [HttpPost]
         public ActionResult actThanhToanNBan()
         {
             Models.HoaDon hd_tong = Session["hoadon_thanhtoanN"] as Models.HoaDon;
             bool flag = false;
             string[] arr_idBan = Request.Form.GetValues("arr_idBan");
             for (int i = 0; i < arr_idBan.Count(); i++)
             {
                 var idBan = Int32.Parse(arr_idBan[i].ToString());
                 int tongtienhd = 0;
                 string session_id = "hoadon" + idBan;

                 var _sessionDB_TT = "datban_thanhtoan" + idBan;
                 var idDatBan = Session[_sessionDB_TT];
                 Models.DatBan datban = dc.DatBans.Find(Int32.Parse(idDatBan.ToString()));
                 Models.HoaDon hd = Session[session_id] as Models.HoaDon;
                 DateTime _dt = DateTime.Now;
                 foreach (var a in hd.ChiTietHoaDons)
                 {
                     tongtienhd += a.dongia * a.soluong;
                 }

                 Models.HoaDon hoadon = new HoaDon();
                 hoadon.hoadon_monan_tonggia = tongtienhd;
                 hoadon.hoadon_tongtien = tongtienhd;
                 hoadon.hoadon_ngaylap = _dt;
                 hoadon.thuckhach_sdt = hd.thuckhach_sdt;
                 hoadon.phongan_id = hd.phongan_id;
                 hoadon.banan_id = hd.banan_id;
                 //đặt lại trạng thái của đơn đặt bàn
                 datban.datban_trangthai = true;
                 //thêm chi tiết vào hóa đơn 
                 foreach (var a in hd.ChiTietHoaDons)
                 {
                     Models.ChiTietHoaDon cthd = new ChiTietHoaDon();
                     Models.MonAn ma = dc.MonAns.Find(a.monan_id);
                     cthd.hoadon_id = hoadon.hoadon_id;
                     cthd.monan_id = a.monan_id;
                     cthd.nuocuong_id = a.nuocuong_id;
                     cthd.soluong = a.soluong;
                     cthd.dongia = a.dongia;
                     cthd.MonAn = ma;
                     hoadon.ChiTietHoaDons.Add(cthd);
                 }
                 //add vào hóa đơn lớn
                 if (flag == false)
                 {
                     hd_tong = hoadon;
                     flag = true;
                 }
                 else
                 {
                     hd_tong.hoadon_tongtien += hoadon.hoadon_tongtien;
                     hd_tong.hoadon_monan_tonggia += hoadon.hoadon_monan_tonggia;
                     foreach (var a in hd.ChiTietHoaDons)
                     {
                         Models.ChiTietHoaDon cthd = new ChiTietHoaDon();
                         Models.MonAn ma = dc.MonAns.Find(a.monan_id);
                         cthd.hoadon_id = hoadon.hoadon_id;
                         cthd.monan_id = a.monan_id;
                         cthd.nuocuong_id = a.nuocuong_id;
                         cthd.soluong = a.soluong;
                         cthd.dongia = a.dongia;
                         cthd.MonAn = ma;
                         hd_tong.ChiTietHoaDons.Add(cthd);
                     }
                 }
                 //save
                 dc.HoaDons.Add(hoadon);
                 dc.SaveChanges();
                 //clear session
                 Session[session_id] = new Models.HoaDon();
                 Session[_sessionDB_TT] = null;
                 Session["hoadon_thanhtoanN"] = hd_tong;
             }
             return View("XuatBill",hd_tong.ChiTietHoaDons.ToList());

         }
        // Danh sách hóa đơn
         public ActionResult LstHoaDon(int? i)
         {
             ViewBag.BanAn = dc.BanAns.ToList();
             return View(dc.HoaDons.ToList().ToPagedList(i ?? 1, 10));
         }
        //xem chi tiết hóa đơn của danh sách hóa đơn
         public ActionResult actChiTietHoaDon(int id)
         {
             Models.HoaDon hd = dc.HoaDons.Find(id);

             return View("showChiTietHoaDon",hd.ChiTietHoaDons.ToList());
         }
        //hiển thị danh sách loại bàn ăn
        public ActionResult LstLoaiBanAn()
        {
            return View("");
        }
        public ActionResult Lstnguyenlieu()
        {
            return View(dc.NguyenLieux.ToList());
        }
        public ActionResult formthemnguyenlieu()
        {
            return View("formthemnguyenlieu");
        }
        [HttpPost]
        public ActionResult actthemnguyenlieu(Models.NguyenLieu nguyenlieu)
        {        
            Models.NguyenLieu x = dc.NguyenLieux.Find(nguyenlieu.nguyenlieu_id);
            if (x == null)
            {
                if (nguyenlieu.nguyenlieu_id == 0)
                {
                    nguyenlieu.nguyenlieu_id = 1;
                }
                dc.NguyenLieux.Add(nguyenlieu);
                dc.SaveChanges();
                return RedirectToAction("LstNguyenlieu");
            }
            return View("formthemnguyenlieu");
        }
        //hien thi form them nguyen lieu
        public ActionResult formsuanguyenlieu(int id)
        {
            Models.NguyenLieu x=dc.NguyenLieux.Find(id);
            if(x!=null){
                return View(x);
            }
            return RedirectToAction("Lstnguyenlieu");
        }
        //action sua thong tin nguyen lieu
        public ActionResult actsuanguyenlieu(Models.NguyenLieu nguyenlieu)
        {
            if(ModelState.IsValid){
                Models.NguyenLieu x = dc.NguyenLieux.Find(nguyenlieu.nguyenlieu_id);
                if(x!=null){
                    x.nguyenlieu_ten=nguyenlieu.nguyenlieu_ten;
                    x.nguyenlieu_dvt=nguyenlieu.nguyenlieu_dvt;
                    dc.SaveChanges();
                    return RedirectToAction("Lstnguyenlieu");
                }
            }
            return View("Lstnguyenlieu");
        }
        public ActionResult actXoaNguyenLieu(int id)
        {
               Models.NguyenLieu x = dc.NguyenLieux.Find(id);
            //sqlkiemtra
            var kt = new Models.db_totnghiepEntities();
            var ktnguyenlieu = kt.Khoes.SqlQuery("Select nguyenlieu_id from NguyenLieu where nguyenlieu_id=@id", new SqlParameter("@id", id)).FirstOrDefault();
            if (ktnguyenlieu == null)
            {
                if (x != null)
                {
                    dc.NguyenLieux.Remove(x);
                    dc.SaveChanges();
                    return Redirect("/Admin/admin/Lstnguyenlieu");
                }
            }
            return Redirect("/Admin/admin/Lstnguyenlieu");
        }
        //hien thi thong tin kho
        public ActionResult Kho()
        {
            return View(dc.Khoes.ToList());
        }
        //hien thi form nhap kho
        public ActionResult formNhapKho()
        {
            SelectList dsNguyenLieu = new SelectList(dc.NguyenLieux.ToList(), "nguyenlieu_id", "nguyenlieu_ten");
            ViewBag.dsnguyenlieu = dsNguyenLieu;       
            return View("formNhapKho");
        }
        //action xu ly nhap kho nguyen lieu
        [HttpPost]
        public ActionResult actNhapKho(Models.PhieuNhap Pn)
        {
                Models.Kho ko = dc.Khoes.Where(s=>s.nguyenlieu_id==Pn.nguyenlieu_id).FirstOrDefault();        
                dc.PhieuNhaps.Add(Pn);
                dc.SaveChanges();
                if (ko!=null)
                {
                    ko.kho_tongsoluong += Pn.phieunhap_soluong;
                    ko.phieunhap_id = Pn.phieunhap_id;
                    ko.nuocuong_id = null;
                    ko.kho_tenkho = "nguyenlieu";
                    ko.kho_ngaynhap = Pn.phieunhap_ngaynhap;
                    ko.kho_ngayhethan = Pn.phieunhap_ngayhethan;
                    dc.SaveChanges();
                    return Redirect("Kho");
                }
                else
                {
                    Models.Kho newkho=new Models.Kho();
                    newkho.nguyenlieu_id = (int)Pn.nguyenlieu_id;
                    newkho.nuocuong_id = null;
                    newkho.kho_tongsoluong = Pn.phieunhap_soluong;
                    newkho.phieunhap_id = Pn.phieunhap_id;
                    newkho.kho_tenkho = "nguyenlieu";
                    newkho.kho_ngaynhap = Pn.phieunhap_ngaynhap;
                    newkho.kho_ngayhethan = Pn.phieunhap_ngayhethan;
                    dc.Khoes.Add(newkho);
                    dc.SaveChanges();
                    return Redirect("Kho");
                }
        }
        //hien thi form nhap nuoc uong
        public ActionResult formNhapnuocuong()
        {
            SelectList dsnuocuong = new SelectList(dc.NuocUongs.ToList(), "nuocuong_id", "nuocuong_ten");
            ViewBag.dsnuocuong = dsnuocuong;
            return View("formNhapnuocuong");
        }
        //action xu ly nhap nuoc uong
        [HttpPost]
        public ActionResult actNhapNuocUong(Models.PhieuNhap Pn)
        {
            Models.Kho ko = dc.Khoes.Where(s => s.nuocuong_id == Pn.nuocuong_id).FirstOrDefault();
            dc.PhieuNhaps.Add(Pn);
            dc.SaveChanges();
            if (ko != null)
            {
                ko.kho_tongsoluong += Pn.phieunhap_soluong;
                ko.phieunhap_id = Pn.phieunhap_id;
                ko.nguyenlieu_id = null;
                ko.kho_tenkho = "nuocuong";
                ko.kho_ngaynhap = Pn.phieunhap_ngaynhap;
                ko.kho_ngayhethan = Pn.phieunhap_ngayhethan;
                dc.SaveChanges();
                return Redirect("Kho");
            }
            else
            {
                Models.Kho newkho = new Models.Kho();
                newkho.nuocuong_id = (int)Pn.nuocuong_id;
                newkho.nguyenlieu_id = null;
                newkho.kho_tongsoluong = Pn.phieunhap_soluong;
                newkho.phieunhap_id = Pn.phieunhap_id;
                newkho.kho_ngaynhap = Pn.phieunhap_ngaynhap;
                newkho.kho_ngayhethan = Pn.phieunhap_ngayhethan;
                newkho.kho_tenkho = "nuocuong";
                dc.Khoes.Add(newkho);
                dc.SaveChanges();
                return Redirect("Kho");
            }
        }
        //action xu ly kiem tra kho
        public ActionResult actCapNhatKho()       
        {
            var nlkho = dc.Khoes.ToList();
            String ktrakho="";
            for (int i = 0; i < nlkho.Count; i++)
            {
                if (nlkho[i].kho_tongsoluong < 90)
                {
                    ktrakho+="<script language='javascript' type='text/javascript'>alert('Nguyen Lieu Co ID=" + nlkho[i].nguyenlieu_id + " Sap Het So Luong Trong Kho');</script>"; 
                    
                }     
            }
            return Content(ktrakho);
        }      
        // xem chi tiet phieu nhap nguyen lieu
        public ActionResult frmChiTietPhieuNhap(int id)
        {
            Models.PhieuNhap x = dc.PhieuNhaps.Where(s => s.nuocuong_id == id).FirstOrDefault();
            if (x != null)
            {
                return RedirectToAction("frmChiTietPhieuNhap",x);
            }
            return Content("1");
          
            //return RedirectToAction("frmChiTietPhieuNHap", new { id });
                 //return View(dc.PhieuNhaps.Where(s => s.nguyenlieu_id == id).ToList());            
        }
        //chi tiet phieu nhap nuoc uong
        public ActionResult actChiTietPhieuNhapNuocUong(int id)
        {
            Models.PhieuNhap x = dc.PhieuNhaps.Where(s => s.nuocuong_id == id).FirstOrDefault();
            if (x != null)
            {
                return View(x.nguyenlieu_id);
            }
            return Content("1");
        }
        //hien thi danh sach thuc khach
        public ActionResult LstThuckhach()
        {
            return View(dc.ThucKhaches.ToList());
        }
        //an trang thai, thuc khach khong the dang nhap
        public ActionResult actanthuckhach(string id)
        {
            Models.ThucKhach x = dc.ThucKhaches.Find(id);
            if (x != null)
            {
                if (x.thuckhach_trangthai == true)
                {
                    x.thuckhach_trangthai = false;
                }
                else
                {
                    x.thuckhach_trangthai = true;
                }
                dc.SaveChanges();
                return Redirect("/Admin/admin/Lstthuckhach");
            }
            return View("Lstthuckhach");
        }
        public ActionResult lstdatban(int? i)
        {
            return View(dc.DatBans.ToList().ToPagedList(i ?? 1, 10));
        
        }
        //ds yêu cầu hôm nay
        public ActionResult showDsHomNay()
        {
            return PartialView(dc.DatBans.ToList());
        }
        //thêm đặt bàn mới 
        public ActionResult formThemDatBan()
        {
            SelectList dsLoaiBA = new SelectList(dc.LoaiBanAns.ToList(), "loaibanan_id", "loaibanan_id");
            ViewBag.dsLoaiBA = dsLoaiBA;
            SelectList dsPa = new SelectList(dc.PhongAns.ToList(), "Phongan_id", "phongan_ten");
            ViewBag.dsPha = dsPa;
            return View();

        }
        //action thêm đặt bàn
        [HttpPost]
        public ActionResult actThemDatBan(Models.DatBan db)
        { 
            //if(ModelState.IsValid)
            //{
                Models.DatBan datban = new Models.DatBan(); 
                datban.thuckhach_sdt = db.thuckhach_sdt;
                //thông tin đặt bàn
                datban.soban = db.soban;
                DateTime span1 = DateTime.Parse(Request["thoigianbatdau"]);
                DateTime span2 = DateTime.Parse(Request["thoigianketthuc"]);

                TimeSpan _time1 = span1.TimeOfDay;  //returns a TimeSpan from the Time portion
                TimeSpan _time2 = span2.TimeOfDay;
                
                datban.thoigianbatdau = _time1;
                datban.thoigianketthuc = _time2;
                datban.ngay = db.ngay;
                datban.phongan_id = db.phongan_id;
                datban.loaibanan_id = db.loaibanan_id;
                datban.datban_trangthai = db.datban_trangthai;
                //món ăn


                dc.DatBans.Add(datban);
                dc.SaveChanges();
                return RedirectToAction("lstdatban"); 
                
            //}

            //return View("formThemDatBan", db); 
        }
        //xác nhận đơn đặt bàn. -> chuyển trang thái từ null -> false
        public ActionResult actXacNhanDDB(int id)
        {
            Models.DatBan db = dc.DatBans.Find(id);
            if (db != null)
            {
                db.datban_trangthai = false;
                dc.SaveChanges();
                return RedirectToAction("lstdatban");
            }
            return View("lstdatban");
        }
        //xóa đơn đặt bàn khỏi ds đặt bàn
        public ActionResult actXoaDatBan(int id)
        { 
            Models.DatBan db = dc.DatBans.Find(id);
            Models.DatBan_MonAn db_ma = null;
            if (db != null)
            {
                if (db.DatBan_MonAn.Count() == 0)
                {
                    dc.DatBans.Remove(db);
                    dc.SaveChanges();
                    return RedirectToAction("lstdatban");
                }
                else
                {
                    foreach (var item in db.DatBan_MonAn)
                    {
                        db_ma = new DatBan_MonAn();
                        db_ma.datban_id = item.datban_id;
                        db_ma.monan_gia = item.monan_gia;
                        db_ma.monan_id = item.monan_id;
                        db_ma.monan_soluong = item.monan_soluong;
                        db_ma.MonAn = item.MonAn;
                        db.DatBan_MonAn.Remove(db_ma);
                    }
                    dc.DatBans.Remove(db);
                    dc.SaveChanges();
                    return RedirectToAction("lstdatban");
                }
                
            }
            return View("lstdatban");
        }
        //show các món ăn đc đặt dc
        public ActionResult formShowDatTruoc(int id)
        {
            Models.DatBan db = dc.DatBans.Find(id);
            if (db != null)
            {
                return View(db.DatBan_MonAn);
            }
            return View("lstdatban");
        }
        //xếp vào bàn
        public ActionResult formXepVaoBan(int id)
        {

            SelectList dsPa = new SelectList(dc.PhongAns.ToList(), "phongan_id", "phongan_ten");
            ViewBag.dsPA = dsPa;
            Models.DatBan db = dc.DatBans.Find(id);
            //Session["xepban_phongan"] = db.phongan_id;
            //ViewBag.IdBan = db.loaibanan_id;
            Session["datban_xepban"] = db as Models.DatBan;
            if (db != null)
            {

                return View(db);
            }
            return View("lstdatban");
        }
        //show bàn ăn
        public ActionResult showXepBan(int id)
        {
            ViewBag.PaID = id;
            //var PaId = Session["xepban_phongan"];
            //ViewBag.PaID = PaId;
            return PartialView("showXepBan", dc.BanAns.ToList());
            //return PartialView("showXepBan", dc.BanAns.Where(x=>x.phongan_id==id).ToList());
        }
        //show bàn ăn
        [HttpPost]
        public ActionResult actXepBan(int id)
        {

            Models.DatBan db = Session["datban_xepban"] as Models.DatBan;
            string[] arr_cbx = Request.Form.GetValues("arr_cbx");
            //thay đổi trạng thái của đơn đặt bàn
            Models.DatBan datban = dc.DatBans.Find(db.datban_id);
            datban.datban_trangthai = true;
            dc.SaveChanges();
            //for
            for (int i = 0; i <= arr_cbx.Count(); i++)
            {
                var _sessionHD = "hoadon" + Int32.Parse(arr_cbx[i].ToString());
                Models.HoaDon hd = Session[_sessionHD] as Models.HoaDon;
                Models.ChiTietHoaDon cthd = null;
                hd.thuckhach_sdt = db.thuckhach_sdt;
                hd.banan_id = Int32.Parse(arr_cbx[i].ToString());
                hd.phongan_id = id;

                

                foreach (var a in db.DatBan_MonAn)
                {
                    cthd = new ChiTietHoaDon();
                    cthd.hoadon_id = hd.hoadon_id;
                    cthd.monan_id = a.monan_id;
                    cthd.dongia = a.monan_gia;
                    cthd.soluong = a.monan_soluong;
                    cthd.MonAn = a.MonAn;
                    hd.ChiTietHoaDons.Add(cthd);
                }
                Session["datban_xepban"] = null;
                var _sessionDB_TT = "datban_thanhtoan" + hd.banan_id;
                Session[_sessionDB_TT] = db.datban_id;
                return RedirectToAction("lstdatban");
            }
            Session["datban_xepban"] = null;
            return RedirectToAction("showXepBan", id);
        }
        //tìm kiếm
        [HttpPost]
        public ActionResult searchBanAn(string thoigianbatdau, string book_date)
        {
            if (thoigianbatdau != "" && book_date != "")
            {
                //DateTime _span = DateTime.Parse(Request["thoigianbatdau"]);
                DateTime _span = DateTime.Parse(thoigianbatdau.ToString());
                TimeSpan _time = _span.TimeOfDay;  //returns a TimeSpan from the Time portion
                //DateTime _dt = DateTime.Parse(Request["ngay"]);
                DateTime _dt = DateTime.Parse(book_date.ToString());
                return PartialView(dc.DatBans.Where(x => ((x.thoigianbatdau <= _time && x.thoigianketthuc >= _time) && x.ngay == _dt) || (thoigianbatdau == null & book_date == null)).ToList());
            }

            return PartialView(dc.DatBans.ToList());
        }
        //
        [HttpPost]
        public ActionResult searchSDT(string sodienthoai_search, string search_date_SDT)
        {
            var thongbao = "";
            if (sodienthoai_search != "")
            {
                if (search_date_SDT !="")
                {
                    return PartialView(dc.DatBans.Where(x => (x.thuckhach_sdt.Trim() == sodienthoai_search) && x.ngay.ToString() == search_date_SDT/*|| (sodienthoai_search == null)*/).ToList());
                }
                else
                {
                    return PartialView(dc.DatBans.Where(x => x.thuckhach_sdt.Trim() == sodienthoai_search /*|| (sodienthoai_search == null)*/).ToList());
                }
                
            }
            else
            {
                thongbao = "<script language='javascript' type='text/javascript'>alert('Nhập số điện thoại muốn tìm!');</script>";
                return Content(thongbao);
            }
        }
    }
}