package com.example.diana.moneycontrol.register

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import com.example.diana.moneycontrol.main.MainActivity
import com.example.diana.moneycontrol.R
import kotlinx.android.synthetic.main.activity_register.*

class RegisterActivity : AppCompatActivity(), RegisterView {

    private val presenter : RegisterPresenter = RegisterPresenter(this)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register)

        bnRegister.setOnClickListener {
            presenter.register(etEmail.text.toString(), etPassword.text.toString(),
                etName.text.toString(), etSurname.text.toString())
        }
    }

    override fun onRegisterSuccess() {
        val intent = Intent (this, MainActivity::class.java)
        startActivity(intent)
    }

    override fun onRegisterFailed(message: String?) {
        Toast.makeText(this, message, Toast.LENGTH_SHORT).show()
    }



}
