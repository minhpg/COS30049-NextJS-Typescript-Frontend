"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import {
  ThemeSupa,
} from "@supabase/auth-ui-shared";
import { Title, Flex, Card } from "@tremor/react";

const AuthPage = () => {
  const supabase = createClientComponentClient();
  return (
    <Flex className="h-full" alignItems="center" flexDirection="col">
      <Flex className="w-full" justifyContent="center" flexDirection="row">
        <Card className="w-96">
          <Title>Authenticate</Title>
          <Auth
            supabaseClient={supabase}
            providers={[]}
            showLinks={false}
            view="magic_link"
            appearance={{ theme: ThemeSupa }}
            redirectTo="http://localhost:3000/api/auth/callback"
          />
        </Card>
      </Flex>
    </Flex>
  );
};

export default AuthPage;
