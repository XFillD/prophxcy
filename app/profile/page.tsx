"use client";

import { Header } from "@/components/Header";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { useUser } from "@/hooks/useUser";

const Profile = () => {
  const { user } = useUser();
  return (
    <div className="flex flex-col h-screen">
      <Header>My Profile</Header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex flex-col md:grid md:grid-cols-6 gap-6">
          <div className="md:col-span-4 lg:col-span-3 xl:col-span-4 flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Purchased Exclusive Beats</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px] hidden md:table-cell">
                        Image
                      </TableHead>
                      <TableHead className="max-w-[150px]">Title</TableHead>
                      <TableHead>Artist</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="hidden md:table-cell">
                        <img
                          alt="Beat image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src="/beato.svg"
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">Beatas</TableCell>
                      <TableCell>Prophxcy</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="hidden md:table-cell">
                        <img
                          alt="Beat image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src="/beato.svg"
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">Beatas</TableCell>
                      <TableCell>Prophxcy</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Purchased Beat Leases</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px] hidden md:table-cell">
                        Image
                      </TableHead>
                      <TableHead className="max-w-[150px]">Title</TableHead>
                      <TableHead>Artist</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="hidden md:table-cell">
                        <img
                          alt="Beat image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src="/beato.svg"
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">Beatas</TableCell>
                      <TableCell>Prophxcy</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="hidden md:table-cell">
                        <img
                          alt="Beat image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src="/beato.svg"
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">Beatas</TableCell>
                      <TableCell>Prophxcy</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-2 flex flex-col gap-6">
            <Card className="shadow-lg bg-white dark:bg-gray-800 rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  User Information
                </CardTitle>
              </CardHeader>
              <CardContent className="text-base">
                <div className="grid gap-1">
                  <div className="font-semibold">Email: {user?.email}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Profile;
