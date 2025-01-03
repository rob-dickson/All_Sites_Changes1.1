

"Has successfully completed the" &
    ifs(CertificationDD = "3", " basic training program in", "") &
    "<BR>" &
    ifs(CertificationDD = "1", "<font face='HelveticaNeueLTStd-Bd' fontsize='14pt'>FORKLIFT OPERATOR SAFETY TRAINING PROGRAM</font><BR>" &
        ClassNameUI,
        ifs(CertificationDD = "2", "<font face='HelveticaNeueLTStd-Bd' fontsize='14pt'>MEWP OPERATOR SAFETY TRAINING PROGRAM<BR>Group A and B MEWP</font><BR>Type 1 and 3",
            ifs(CertificationDD = "3", "<font face='HelveticaNeueLTStd-Bd' fontsize='14pt'>Rigging, Hoisting, and Signal Person</font><BR> and has demonstrated knowledge and understanding per OSHA 29 CFR requirements",
                ifs(CertificationDD = "4", "<font face='HelveticaNeueLTStd-Bd' fontsize='14pt'>FALL PROTECTION COMPETENT PERSON</font><BR>29 CFR 1926.500 subpart M Fall Protection", ""))))
