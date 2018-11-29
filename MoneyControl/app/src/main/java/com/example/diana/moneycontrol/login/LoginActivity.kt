package com.example.diana.moneycontrol.login

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import com.example.diana.moneycontrol.main.MainActivity
import com.example.diana.moneycontrol.R
import com.example.diana.moneycontrol.register.RegisterActivity
import kotlinx.android.synthetic.main.activity_login.*

class LoginActivity : AppCompatActivity(), LoginView {

    private val presenter : LoginPresenter = LoginPresenter(this)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        bnLogin.setOnClickListener {
            presenter.login(etEmail.text.toString(), etPassword.text.toString())
        }

        presenter.getLastEmail()

        tvRegister.setOnClickListener {
            val intent = Intent(this, RegisterActivity::class.java)
            startActivity(intent)
        }
    }

    override fun onLoginSuccess() {
        val intent = Intent (this, MainActivity::class.java)
        startActivity(intent)
    }

    override fun onLoginFailed(message: String?) {
        Toast.makeText(this, message, Toast.LENGTH_SHORT).show()
    }

    override fun setLastEmail(email: String) {
        etEmail.setText(email)
    }
}
