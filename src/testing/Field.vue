<template>
    <div>
        <mt-field type="text" label="用户名" placeholder="请输入用户名" state="success"></mt-field>
        <mt-field type="password" label="密码" placeholder="请输入密码" :attr="{maxlength:10,autocomplete:'off'}" state="warning"></mt-field>
        <mt-field type="password" label="确认密码" placeholder="请再次输入密码" :attr="{maxlength:10,autocomplete:'off'}" state="error"></mt-field>

        <br><br><br><hr>
        <mt-field type="textarea" label="输入内容" placeholder="请输入内容"></mt-field>
        <mt-field type="email" label="邮箱" placeholder="请输入邮箱"></mt-field>
    </div>
</template>