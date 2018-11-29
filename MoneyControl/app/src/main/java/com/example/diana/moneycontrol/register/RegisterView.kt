package com.example.diana.moneycontrol.register

interface RegisterView {
    fun onRegisterSuccess()
    fun onRegisterFailed (message : String?)
}