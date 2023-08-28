

ifs(len(HeadshotUI)>0, "<font face='FTPolar-Semibold' fontsize='10pt'>" 
& UPPER(FullNameUI) 
& "<BR>" & "</font>" & "<font face='FTPolar-Semibold' fontsize='8pt'>" 
& TitleUI & ifs(DepartmentUI="","",", " & "<BR>" & DepartmentUI) 
& "</font>", "")

---------------------------------------------------------------------------------------------------------------------------------------------

ifs(len(HeadshotUI)>0, "<font face='FTPolar-Semibold' fontsize='10pt'>" 
& UPPER(FullNameUI) 
& "<BR>" & "</font>" & "<font face='FTPolar-Semibold' fontsize='6pt'>" 
& TitleUI & "</font>" & "<font face='FTPolar-Semibold' fontsize='8pt'>" & ifs(DepartmentUI="","",", " & "<BR>" & DepartmentUI) 
& "</font>", "")

---------------------------------------------------------------------------------------------------------------------------------------------

ifs(len(HeadshotUI)>0, "<font face='FTPolar-Semibold' fontsize='10pt'>" & UPPER(FullNameUI) & "<BR>" & "</font>" 

& "<font face='FTPolar-Semibold' fontsize='8pt'>"

& ifs(len(TitleUI)>1.5, "<font face='FTPolar-Semibold' fontsize='6.5pt'>" & TitleUI & "</font>", "")

& ifs(DepartmentUI="","",", " & "<BR>" & DepartmentUI) & "</font>", "")

---------------------------------------------------------------------------------------------------------------------------------------------

ifs(len(HeadshotUI)>0, "<font face='FTPolar-Semibold' fontsize='10pt'>" & UPPER(FullNameUI) & "<BR>" & "</font>" 

& "<font face='FTPolar-Semibold' fontsize='8pt'>"

& ifs(len(TitleUI)>25, "<font face='FTPolar-Semibold' fontsize='6pt'>" & TitleUI & "<BR>" & DepartmentUI & "</font>", 
"<font face='FTPolar-Semibold' fontsize='8pt'>" & TitleUI & "<BR>" & DepartmentUI & "</font>")

& ifs(DepartmentUI="","",", " & "<BR>" & DepartmentUI) & "</font>", "")

---------------------------------------------------------------------------------------------------------------------------------------------




John Jameson
Cerified Reverse Mortgage Specialist
Louisville KY Resident

10509 Vista Sorreto Pkwy Ste 400
San Diego, CA 92121

502.544.2119
jjameson@c2financial.com
reverselouisville.com

455553
MC751512


