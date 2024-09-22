<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="card bg-base-100 w-96 shadow-xl">
      <div class="card-body">
        <h2 class="flex justify-center text-3xl py-5">Login</h2>
        <Form @submit="onSubmit" :validation-schema="validationSchema">
          <div class="form-control">
            <Field name="email" placeholder="username" class="input input-bordered w-full max-w-xs"/>
            <ErrorMessage class="text-red-500" name="email"/>
          </div>

          <div class="form-control">
            <Field name="password" type="password" placeholder="password" class="input input-bordered w-full max-w-xs"/>
            <ErrorMessage class="text-red-500" name="password"/>
          </div>
          <div class="card-actions justify-center py-5">
            <button type="submit" class="btn btn-primary btn w-full">Login</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as zod from 'zod';
import {toTypedSchema} from '@vee-validate/zod';
import {Form, Field, ErrorMessage} from 'vee-validate';
import {useAuthStore} from '~/stores/auth';

const authStore = useAuthStore();

const validationSchema = toTypedSchema(
    zod.object({
      email: zod.string().min(1, { message: 'Email é obrigatório' }).email({ message: 'Email inválido' }),
      password: zod.string().min(1, { message: 'Senha é obrigatório' }).min(8, { message: 'Senha curta' }),
    })
);

async function onSubmit(values) {
  await authStore.login(values);
}
</script>