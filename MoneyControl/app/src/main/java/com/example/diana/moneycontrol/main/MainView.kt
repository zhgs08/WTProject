package com.example.diana.moneycontrol.main

import com.example.diana.moneycontrol.model.record.Record

interface MainView {
    fun onLogoutSuccess ()
    fun showMessage(message: String)
    fun setEmailAndName(email : String, name : String)
    fun setRecords(items: ArrayList<Record>)

}